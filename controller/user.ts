import { EntityManager } from "typeorm";
import { AppDataSource } from "../app"

import express, { Request, Response } from "express";
import { table } from "../entity/table"

const Insert = async (req: Request, resp: Response) => {

    try{

    const name = req.body.name;
    const word = name.split(" ");
    const age = req.body.age;
    if (age < 17 || age > 100) {
        resp.status(412).send({ "Message": "Age must be between 18 and 100" });
    }
    else if (word[0].length < 5) {

        resp.status(412).send({ "Message": "Minimum length of first name is atleast 5" });
    }

    else if (word[1] == undefined) {

        resp.status(412).send({ "Message": "Last name is mandatory" });

    }
    else {



        console.log(name, age);
        const data = new table()

        data.Name = name;
        data.Age = age;


        await AppDataSource.manager.save(data)
        console.log("Data has been saved. Data id is", data.Id)
        resp.send(data);
    }
    }
    catch(error){
        
    resp.status(500).send({ "Message": "Internal Server Error" }); 
    }
}
//Get all employee

const Getall = async (req: Request, resp: Response) => {
    try {
        const tableRepository = AppDataSource.getRepository(table)
        const getall = await tableRepository.find()
        resp.json(
            {
                "result": getall
            })
    }



    catch (err) {
        resp.status(500).send({ "Message": "Internal Server Error:" + err });
    }

}


//Get employeee of particular id

const Getid = async (req: Request, resp: Response) => {

    try {

        const id: number = parseInt(req.params.id);


        const tableRepository = AppDataSource.getRepository(table)
        const data: any = await tableRepository.findOneBy({
            Id: id,


        })
        if (data == null) {
            resp.status(404).send({ "Message": "Given Id is not a valid" });

        }
        else {
            resp.send(data);
        }
    }
    catch (err) {
        resp.status(500).send({ "Message": "Internal Server Error:" + err });

    }
}


//Delete employee of particular id
const DeleteEmploy = async (req: Request, resp: Response) => {
    try {

        const id: number = parseInt(req.params.id);

        const tableRepository = AppDataSource.getRepository(table)
        const data: any = await tableRepository.findOneBy({
            Id: id,
        })
        if (data.Name == null) {
            resp.status(404).send({ "Message": "Given Id is not a valid" });

        }
        else {
            await tableRepository.remove(data);

            resp.send(data);
        }
    }
    catch (err) {

        resp.status(500).send({ "Message": "Internal Server error" });

    }
}


// UpdateEmploy of of particular id
const UpdateEmploy = async (req: Request, resp: Response) => {
    try{
    const id: number = parseInt(req.params.id);
    const name: string = req.body.name;
    const age = req.body.age;




    const tableRepository = AppDataSource.getRepository(table)
    const data: any = await tableRepository.findOneBy({
        Id: id

    })

    if (data == null) {
        resp.status(404).send({ "Message": "Given Id is not a valid" });
    }
    else {

        if (age != null && name != null) {


            const word = name.split(" ");

            if (age > 100 || age < 18) {

                resp.status(404).send({ "Message": "Age must be between 18 and 100" });

            }
            else if (word[0].length < 5) {
                resp.send({ "Message": " First Name must be at least 5 characters" });
            }
            else if (word[1] == undefined) {
                resp.status(412).send({ "Message": "Last name is mandatory" });
            }
            else {
                const tableRepository = AppDataSource.getRepository(table)
                const data: any = await tableRepository.findOneBy({
                    Id: id,
                })

                data.Name = name;
                data.Age = age;

                await tableRepository.save(data);

                resp.send(data);
            }
        }
        else if (age != null) {
            if (age > 100 || age < 18) {

                resp.status(404).send({ "Message": "Age must be between 18 and 100" });

            }

            const tableRepository = AppDataSource.getRepository(table)
            const data: any = await tableRepository.findOneBy({
                Id: id,
            })


            data.Age = age;

            await tableRepository.save(data);

            resp.send(data);
        }

        else {
            
            const name = req.body.name;
            const word = name.split(" ");
            if (word[0].length < 5) {
                resp.status(412).send({ "Message": "Name must be at least 5 characters" });
            }
            else if (word[1] == undefined) {
                resp.status(412).send({ "Message": "Last name is mandatory" });
            }



            else {
                const tableRepository = AppDataSource.getRepository(table)
                const data: any = await tableRepository.findOneBy({
                    Id: id,
                })


                data.Name = name;

                await tableRepository.save(data);

                resp.send(data);
            }

        }

    }

}
catch (err){
    resp.status(500).send({ "Message": "Internal Server Error" }); 
}

}




export {
    Insert, Getall, DeleteEmploy, Getid, UpdateEmploy
}