export interface Tarea {
    id: number;
    titulo: string;
    description: string;
    status: TareaStatus;
}
enum TareaStatus {
    PEMDIENTE,
    EN_PROCESO,
    TERMINADA
}