export interface Categoria {
    clave: string;
    fechaCreado?: number;
    nombre: string;
    activo: boolean;
}

export interface Articulo {
    clave: string;
    categoria: Categoria;
    nombre: string;
    precios: Precio[];
    activo: boolean;
}

export interface Precio {
    precio: number;
}