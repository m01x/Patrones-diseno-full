/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 */

import { COLORS } from '../helpers/colors.ts';

//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 * 
 ** Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

  class Query {
    public select: string[] = ['*'];
    public where?: string;
    public orderBy?: {
      field: string,
      order: string
    }
    public limit?: number;
    public table!: string;


    displayTable(){
        console.log(`selected table ${this.table}`)
    }
}

class QueryBuilder {
    private query: Query;

    constructor(table: string){
        this.query = new Query();
    }

    setSelect(select: string[]):QueryBuilder{
        this.query.select = select;
        return this;
    }

    setWhere(where: string):QueryBuilder{
        this.query.where = where;
        return this;
    }

    setOrderBy(orderBy: {}):QueryBuilder{
      const { field, order} = orderBy;
      this.query. = ;
      return this;
  }

  setWhere(where: string):QueryBuilder{
    this.query.where = where;
    return this;
}

    execute(){
        return this.query;
    }
}

function main(){

    const computadorMuriel: Computer = new ComputerBuilder()
        .setCPU(' Intel I7-6700')
        .setRam('32 GB')
        .setStorage('512GB SSD')
        .build();

    console.log(`%cComputadora de muriel:`, COLORS.blue);
    computadorMuriel.displayConfiguration();

    const computadorMoix : Computer = new ComputerBuilder()
        .setCPU('Intel i7-13700K')
        .setRam('16 GB Ram')
        .setStorage('512 GB + 1TB SSD M2')
        .build();

        console.log(`%cComputadora de Flavio:`, COLORS.red);
    computadorMoix.displayConfiguration();
}

main();





























//! Solución

// class QueryBuilder {
//   private table: string;
//   private fields: string[] = [];
//   private conditions: string[] = [];
//   private orderFields: string[] = [];
//   private limitCount?: number;

//   constructor(table: string) {
//     this.table = table;
//   }

//   select(...fields: string[]): QueryBuilder {
//     throw new Error('Method not implemented.');
//   }

//   where(condition: string): QueryBuilder {
//     throw new Error('Method not implemented.');
//   }

//   orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
//     throw new Error('Method not implemented.');
//   }

//   limit(count: number): QueryBuilder {
//     throw new Error('Method not implemented.');
//   }

//   execute(): string {
//     // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
//     throw new Error('Method not implemented.');
//   }
// }

// function main() {
//   const usersQuery = new QueryBuilder('users')
//     .select('id', 'name', 'email')
//     .where('age > 18')
//     .where("country = 'Cri'") // Esto debe de hacer una condición AND
//     .orderBy('name', 'ASC')
//     .limit(10)
//     .execute();

//   console.log('%cConsulta:\n', COLORS.red);
//   console.log(usersQuery);
// }

// main();
