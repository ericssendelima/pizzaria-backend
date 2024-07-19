
import crypto from 'crypto';
import multer from "multer";
import prismaClient from '../prisma';

import { extname, resolve } from "path";

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: async (request, file, callback) => {

                    const { name, category_id } = request.body;
                    const productAlreadyExists = await prismaClient.product.findFirst({
                        where: {
                            name,
                            category_id
                        }
                    });

                    if (!productAlreadyExists) {
                        const fileHash = crypto.randomBytes(16).toString("hex");
                        const fileName = `${fileHash}-${file.originalname}`;

                        return callback(null, fileName)

                    } else {
                        const teste = new Error("O produto JÁ existe!");
                        console.log(teste.message)
                        return callback(teste, "")
                    }
                }
            })
        }
    }
}