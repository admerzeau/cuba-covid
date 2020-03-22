import fs from 'fs'
import path from 'path'

const getFullPath = (parentFolderPath: string, fileName: string): string => path.join(parentFolderPath, fileName)

const isDirectory = (fullFilePath: string): boolean => fs.lstatSync(fullFilePath).isDirectory()

export { getFullPath, isDirectory }
