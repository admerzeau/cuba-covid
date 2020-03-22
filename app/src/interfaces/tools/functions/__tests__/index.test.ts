import fs, { Stats } from 'fs'
import logger from '../../logger'
import { getFullPath, isDirectory } from '../index'

describe('Utility functions tests', (): void => {
  beforeAll((): void => {
    logger.mute()
  })

  afterEach((): void => {})

  afterAll((): void => {
    logger.unmute()
  })

  describe('Function getFullPath:', (): void => {
    it('should get a full path string given proper parentFolder and fileName', (): void => {
      const parentFolder = '/dummy/folder'
      const fileName = 'dummyFilename.ts'

      const resultPath = getFullPath(parentFolder, fileName)
      expect(resultPath).toBe(parentFolder + '/' + fileName)
    })
  })

  describe('Function isDirectory', (): void => {
    const testPath = '/dummy/path'

    it('should throw an error when path is unaccesible or inexistent', (): void => {
      try {
        isDirectory(testPath)
      } catch (error) {
        expect(error.path).toBe(testPath)
      }
    })

    it('should return false if path is not a directory', (): void => {
      jest.spyOn(fs, 'lstatSync').mockImplementation((): Stats => new Stats())

      const result = isDirectory(testPath)

      expect(result).toBeFalsy()
    })

    it('should return true if path is a directory', (): void => {
      const validDirectoryStats = new Stats()
      jest.spyOn(fs, 'lstatSync').mockImplementation((): Stats => validDirectoryStats)
      jest.spyOn(validDirectoryStats, 'isDirectory').mockImplementation((): boolean => true)

      const result = isDirectory(testPath)

      expect(result).toBeTruthy()
    })
  })
})
