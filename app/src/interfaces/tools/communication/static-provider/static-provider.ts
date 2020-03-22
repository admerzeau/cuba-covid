import DataProvider from '../../../../domain/interfaces/data-provider'
import Historic from '../../../../domain/entities/historic'

const data: Historic = {
  latest: {
    total: 35,
    day: 11,
    date: new Date(),
    data: {
      a: 0.637863,
      b: 0.363698,
    },
  },
  history: [
    {
      total: 3,
      day: 1,
      date: new Date(2020, 3, 11),
      data: {
        a: 0,
        b: 0,
      },
    },
    {
      total: 4,
      day: 2,
      date: new Date(2020, 3, 12),
      data: {
        a: 2.25,
        b: 0.287682,
      },
    },
    {
      total: 4,
      day: 3,
      date: new Date(2020, 3, 13),
      data: {
        a: 2.80975,
        b: 0.130401,
      },
    },
    {
      total: 4,
      day: 4,
      date: new Date(2020, 3, 14),
      data: {
        a: 3.0911,
        b: 0.0759301,
      },
    },
    {
      total: 4,
      day: 5,
      date: new Date(2020, 3, 15),
      data: {
        a: 3.26297,
        b: 0.0499991,
      },
    },
    {
      total: 5,
      day: 6,
      date: new Date(2020, 3, 16),
      data: {
        a: 3.09156,
        b: 0.0714827,
      },
    },
    {
      total: 7,
      day: 7,
      date: new Date(2020, 3, 17),
      data: {
        a: 2.262246,
        b: 0.122952,
      },
    },
    {
      total: 11,
      day: 8,
      date: new Date(2020, 3, 18),
      data: {
        a: 1.81606,
        b: 0.20778,
      },
    },
    {
      total: 16,
      day: 9,
      date: new Date(2020, 3, 19),
      data: {
        a: 1.20951,
        b: 0.278352,
      },
    },
    {
      total: 25,
      day: 10,
      date: new Date(2020, 3, 20),
      data: {
        a: 0.735568,
        b: 0.347634,
      },
    },
    {
      total: 35,
      day: 11,
      date: new Date(2020, 3, 21),
      data: {
        a: 0.637863,
        b: 0.363698,
      },
    },
  ],
}

export default class StaticProvider implements DataProvider {
  public async request(): Promise<Historic> {
    return data
  }
}
