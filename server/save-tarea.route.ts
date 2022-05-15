import { Response, Request } from 'express';
import { TAREAS } from './db-data';

export function saveTarea(req: Request, res: Response) {
  console.log('Saving Tarea');

  setTimeout(() => {
    res.status(200).json(Object.values(TAREAS));
  }, 1000);
}
