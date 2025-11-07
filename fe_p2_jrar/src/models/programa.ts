import type { NivelAcademico } from './nivel-academico'

export interface Programa {
  id: number
  idNivelAcademico: number
  nombre: string
  descripcion: string
  version: number
  duracionMeses: number
  costo: number
  fechaInicio: Date | string
  estado: 'En Planificación' | 'En curso' | 'Finalizado'
<<<<<<< HEAD
  areaConocimiento: string[]
=======
>>>>>>> 82191e9195de0ab592728707dfe5b22e28e716f6
  nivelAcademico?: NivelAcademico
  fechaCreacion?: Date
  fechaModificacion?: Date
}
