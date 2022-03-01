export class Constants {

    //#region TABLAS
    public readonly BTN_ADD_INLINE: any = {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
    };
    public readonly BTN_EDIT_INLINE: any = {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
    };
    public readonly BTN_DELETE_INLINE: any = {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true
    };
    public readonly TABLE_PAGER: any = {
        display: true,
        perPage: 10
    };
    public readonly NO_RESULTADOS = 'No hay resultados';
    //#endregion TABLAS

    constructor() { }
}