export interface IActionButtons {
    addAction: IActionButton;
    editAction: IActionButton;
    saveAction: IActionButton;
    cancelAction: IActionButton;
    acceptAction:IActionButton;
    closeAction: IActionButton;
    deleteAction: IActionButton;
}

export interface IActionButton {
    text: string;
    action: string;
    message: string;
    dataTableVisible: boolean;
    modalDialogVisible: boolean;
    editable: boolean;
    styles: IActionButtonStyles
}

export interface IActionButtonStyles {
    backgroundColor: string;
}