//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
  }

  get rows() {
    const rows = []
    const mRow = this.matrix.split('\n')
    
    for (const row of mRow) {
      rows.push(row.split(' ').map(char => Number(char)))
    }
    
    return rows
  }

  get columns() {
    console.log(this.rows)
    let columns = []

    for (let i = 0; i < this.rows[0].length; i++) {
      let column = []
      for (const row of this.rows) {
        column.push(row[i])
      }
      columns.push(column)
    }

    return columns
  }
}
