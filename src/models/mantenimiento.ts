const sequelize = require('sequelize')

import { database } from "../database/db"

export class mantenimiento extends sequelize.Model{
 public id_mantenimiento!:number ;
 public fecha!: Date ;
 public descripcion!:string;
public resultado!: string;


}

export interface mantenimiento{

    id_mantenimiento:number ;
    fecha: Date ;
    descripcion:string;
   resultado: string;

}

mantenimiento.init (

{

id_mantenimiento:{

    type:sequelize.Datatypes.number,
    AllowNull: false

},

fecha:{

    type:sequelize.Datatypes.Date,
    AllowNull: false

},
descripcion:{

    type:sequelize.Datatypes.string,
    AllowNull: false

},

resultado:{

    type:sequelize.Datatypes.string,
    AllowNull: false

},
},


{
tableName:"dpumarejo_parcial" ,
Sequelize:database ,
timestapms: true


} 


);