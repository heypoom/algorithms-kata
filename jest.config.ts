import { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  moduleNameMapper: {
    '@code/(.*)': ['<rootDir>/src/day1/$1'],
  },
  preset: 'ts-jest',
}

export default config
