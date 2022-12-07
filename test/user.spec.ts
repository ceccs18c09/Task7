

import { DataSource } from "typeorm";
import { AppDataSource } from "../app";
import { Getall } from "../controller/user";
const axios = require('axios');

jest.mock('axios');


describe("Get all data", () => {
    it('returns the data', async () => {
        beforeEach(()=>{

    let dataSources: DataSource[];
    before(async () => dataSources = await createTestingConnections({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: true,
        dropSchema: true,
    }));
    beforeEach(() => reloadTestingDatabases(dataSources));
    after(() => closeTestingConnections(dataSources));

    it("should <put a detailed description of what it should do here>", () => Promise.all(dataSources.map(async dataSource => {

       // tests go here

    })));
            AppDataSource.getRepository = jest.fn().mockImplementation(() => ({
                      fin: () => ({
                        manager: {
                          update: jest.fn()
                        }
                      })
                    }));
                    const connection = typeorm.getConnection();
                    let queryRunner = connection.createQueryRunner();
                    const GdsParty_findOne = jest.spyOn<any, any>(GdsParty, 'findOne');
                    GdsParty_findOne.mockResolvedValue({
                      ChildId: 1
                    });
                    const GdsParty_update = jest.spyOn<any, any>(queryRunner.manager, 'update');
                    GdsParty_update.mockResolvedValue({});
        })
        axios.get.mockResolvedValue({
            data: [
                {
                    "Id": 4,
                    "Name": "Rony R",
                    "Age": 19
                },
                {
                    "Id": 7,
                    "Name": "Abhijith ssA",
                    "Age": 45
                },
                {
                    "Id": 8,
                    "Name": "Ashwathy Sarath",
                    "Age": 29
                },
                {
                    "Id": 10,
                    "Name": "Anjana S",
                    "Age": 23
                },
                {
                    "Id": 11,
                    "Name": "Anjana S",
                    "Age": 23
                },
                {
                    "Id": 12,
                    "Name": "Akshaya S",
                    "Age": 23
                },
                {
                    "Id": 13,
                    "Name": "Akshaya S",
                    "Age": 23
                },
                {
                    "Id": 14,
                    "Name": "Akshaya S",
                    "Age": 23
                }

            ]

        });
      
        //   let response:Response=[
        //     {
        //         "Id": 4,
        //         "Name": "Rony R",
        //         "Age": 19
        //     },
        //     {
        //         "Id": 7,
        //         "Name": "Abhijith ssA",
        //         "Age": 45
        //     },
        //     {
        //         "Id": 8,
        //         "Name": "Ashwathy Sarath",
        //         "Age": 29
        //     },
        //     {
        //         "Id": 10,
        //         "Name": "Anjana S",
        //         "Age": 23
        //     },
        //     {
        //         "Id": 11,
        //         "Name": "Anjana S",
        //         "Age": 23
        //     },
        //     {
        //         "Id": 12,
        //         "Name": "Akshaya S",
        //         "Age": 23
        //     },
        //     {
        //         "Id": 13,
        //         "Name": "Akshaya S",
        //         "Age": 23
        //     },
        //     {
        //         "Id": 14,
        //         "Name": "Akshaya S",
        //         "Age": 23
        //     }

        // ]
        //   let req:Request={};
        //       const data = await Getall(req,response);
        expect(data).toEqual([
            {
                "Id": 4,
                "Name": "Rony R",
                "Age": 19
            },
            {
                "Id": 7,
                "Name": "Abhijith ssA",
                "Age": 45
            },
            {
                "Id": 8,
                "Name": "Ashwathy Sarath",
                "Age": 29
            },
            {
                "Id": 10,
                "Name": "Anjana S",
                "Age": 23
            },
            {
                "Id": 11,
                "Name": "Anjana S",
                "Age": 23
            },
            {
                "Id": 12,
                "Name": "Akshaya S",
                "Age": 23
            },
            {
                "Id": 13,
                "Name": "Akshaya S",
                "Age": 23
            },
            {
                "Id": 14,
                "Name": "Akshaya S",
                "Age": 23
            }
        ]);
       
            
            

    })
})