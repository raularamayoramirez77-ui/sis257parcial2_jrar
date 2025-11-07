-- Añadir columna area_conocimiento a la tabla programas
ALTER TABLE programas 
ADD COLUMN area_conocimiento TEXT;

-- Actualizar registros existentes con un valor por defecto (opcional)
-- UPDATE programas SET area_conocimiento = '' WHERE area_conocimiento IS NULL;
