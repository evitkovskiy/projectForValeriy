import { environment } from '../environments/environment';

export const BASE_API_URL = environment.baseUrl;

export const API_URL = {
    PERSONS: {
        GET: {
            PERSONS: BASE_API_URL + '/persons'
        },
        POST: {
            PERSONS: BASE_API_URL + '/persons'
        },
        PATCH: {
            PERSONS: BASE_API_URL + '/persons'
        },
        DELETE: {
            PERSONS: BASE_API_URL + '/persons'
        }
    }
}

export const ACTION_CONFIGURE = {
    addAction: {
        text: 'Add',
        action: 'AddRow',
        message: 'Add new person in data table',
        dataTableVisible: false,
        modalDialogVisible: false,
        editable: false,
        styles: {
            backgroundColor: 'green',
        }
    },
    editAction: {
        text: 'Edit',
        action: 'EditRow',
        message: 'Are you sure you want to edit this line?',
        dataTableVisible: true,
        modalDialogVisible: false,
        editable: false,
        styles: {
            backgroundColor: '#3f3fbb',
        }
    },
    saveAction: {
        text: 'Save',
        action: 'SaveRow',
        message: 'Are you sure you want to save this line?',
        dataTableVisible: true,
        modalDialogVisible: false,
        editable: true,
        styles: {
            backgroundColor: '#498f4f',
        }
    },
    cancelAction: {
        text: 'Cancel',
        action: 'CancelRow',
        message: 'Are you sure you want to cancel?',
        dataTableVisible: true,
        modalDialogVisible: false,
        editable: true,
        styles: {
            backgroundColor: '#dd3b3b',
        }
    },
    acceptAction: {
        text: 'Accept',
        action: 'Accept',
        message: '',
        dataTableVisible: false,
        modalDialogVisible: true,
        editable: false,
        styles: {
            backgroundColor: 'blue',
        }
    },
    closeAction: {
        text: 'Close',
        action: 'Close',
        message: '',
        dataTableVisible: false,
        modalDialogVisible: true,
        editable: false,
        styles: {
            backgroundColor: '#dd3b3b',
        }
    },
    deleteAction: {
        text: 'Delete',
        action: 'DeleteRow',
        message: 'Are you sure you want to delete this line?',
        dataTableVisible: true,
        modalDialogVisible: false,
        editable: false,
        styles: {
            backgroundColor: '#dd3b3b',
        }
    },
    goHomeAction: {
        text: 'Go Home',
        action: 'Go Home',
        message: '',
        dataTableVisible: false,
        modalDialogVisible: false,
        editable: false,
        styles: {
            backgroundColor: '#3f3fbb',
        }
    },
}

export const VIEW_FORM_CONTROLS = {
    name: 'name',
    surname: 'surname',
    age: 'age',
    сitizenship: 'сitizenship',
    gender: 'gender'
}

export const DEFAULT_PAGINATOR_PARAMETERS = {
    page: 1,
    size: 8
}

export const TABLE_HEADERS = ['Age', 'Gender', 'Name', 'Surname', 'Citizenship', 'Actions'];
