import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Badge, Button, Container, Row, Col, Card, CardBody, CardFooter,
  Form, FormGroup, Label, Media, Input
} from './../../components/';

export default class Util extends React.Component {

    optionsMUIDataTable = {
        filterType: "dropdown",
        responsive: 'stacked',
        selectableRows: "none",
        download: false,
        viewColumns: false,
        textLabels: {
            body: {
              noMatch: "Nenhum registro encontrado",
              toolTip: "Ordernar",
              columnHeaderTooltip: column => `Ordernar por ${column.label}`
            },
            pagination: {
              next: "Próxima página",
              previous: "Página anterior",
              rowsPerPage: "Linhas por página:",
              displayRows: "do",
            },
            toolbar: {
              search: "Procurar",
              downloadCsv: "Download CSV",
              print: "Imprimir",
              viewColumns: "Exibir Colunas",
              filterTable: "Tabela de Filtro",
            },
            filter: {
              all: "Todos",
              title: "FILTROS",
              reset: "REDEFINIR",
            },
            viewColumns: {
              title: "Mostrar Colunas",
              titleAria: "Mostrar/Ocultar Colunas da Tabela",
            },
            selectedRows: {
              text: "linha(s) selecionada(s)",
              delete: "Excluir",
              deleteAria: "Excluir linhas selecionadas",
            },
          }
    };

    optionsMUIDataTableWithOutPrintAndFilter = {
        filterType: "dropdown",
        responsive: 'stacked',
        selectableRows: "none",
        download: false,
        print: false,
        filter: false,
        viewColumns: false,
        textLabels: {
            body: {
              noMatch: "Nenhum registro encontrado",
              toolTip: "Ordernar",
              columnHeaderTooltip: column => `Ordernar por ${column.label}`
            },
            pagination: {
              next: "Próxima página",
              previous: "Página anterior",
              rowsPerPage: "Linhas por página:",
              displayRows: "do",
            },
            toolbar: {
              search: "Procurar",
              downloadCsv: "Download CSV",
              print: "Imprimir",
              viewColumns: "Exibir Colunas",
              filterTable: "Tabela de Filtro",
            },
            filter: {
              all: "Todos",
              title: "FILTROS",
              reset: "REDEFINIR",
            },
            viewColumns: {
              title: "Mostrar Colunas",
              titleAria: "Mostrar/Ocultar Colunas da Tabela",
            },
            selectedRows: {
              text: "linha(s) selecionada(s)",
              delete: "Excluir",
              deleteAria: "Excluir linhas selecionadas",
            },
          }
    };

    optionsMUIDataTableForHistory = {
        filterType: "dropdown",
        responsive: 'stacked',
        selectableRows: "none",
        download: false,
        print: false,
        filter: false,
        viewColumns: false,
        pagination: false,
        selectableRowsOnClick: false,
        search: false,
        sort: false,
        textLabels: {
            body: {
              noMatch: "Nenhum registro encontrado",
              toolTip: "Ordernar",
              columnHeaderTooltip: column => `Ordernar por ${column.label}`
            },
            pagination: {
              next: "Próxima página",
              previous: "Página anterior",
              rowsPerPage: "Linhas por página:",
              displayRows: "do",
            },
            toolbar: {
              search: "Procurar",
              downloadCsv: "Download CSV",
              print: "Imprimir",
              viewColumns: "Exibir Colunas",
              filterTable: "Tabela de Filtro",
            },
            filter: {
              all: "Todos",
              title: "FILTROS",
              reset: "REDEFINIR",
            },
            viewColumns: {
              title: "Mostrar Colunas",
              titleAria: "Mostrar/Ocultar Colunas da Tabela",
            },
            selectedRows: {
              text: "linha(s) selecionada(s)",
              delete: "Excluir",
              deleteAria: "Excluir linhas selecionadas",
            },
          }
    };

	logout() {
		localStorage.removeItem('Authorization')
		localStorage.removeItem('Email')
		localStorage.removeItem('Name')
		localStorage.removeItem('Profile')
		localStorage.removeItem('SectorCompany')
  }
  
  
  /* eslint no-restricted-globals:0 */
  goPreviousPage() {
    history.go(-1);
  }
  
	setIndicationStatusColor(status) {
    if (status === 'FINISHED') {
        return "secondary"
    } else if (status === 'IN_PROGRESS') {
        return "primary"
    } else if (status === 'NEW') {
        return "warning"
    } else if (status === 'PRE_EVALUATION_OK') {
        return "success"
    } else if (status === 'PRE_EVALUATION_NOK') {
        return "danger"
    } else if (status === 'HIRED') {
        return "success"
    } else if (status === 'SENDING_BONUS') {
        return "success"
    } else if (status === 'BONUS_SENT') {
        return "info"        
      } else if (status === 'DISCARDED') {
        return "danger"
    }
  }

  setIndicationStatusName(status) {
    if (status === 'FINISHED') {
        return "Finalizada"
    } else if (status === 'IN_PROGRESS') {
        return "Em andamento"
    } else if (status === 'NEW') {
        return "Nova"
    } else if (status === 'PRE_EVALUATION_OK') {
        return "Pré-avaliado"
    } else if (status === 'PRE_EVALUATION_NOK') {
        return "Pré-avaliado"
    } else if (status === 'HIRED') {
        return "Contratada"
    } else if (status === 'SENDING_BONUS') {
        return "Enviando Bônus"
    } else if (status === 'BONUS_SENT') {
        return "Bonus depositado"
    } else if (status === 'DISCARDED') {
        return "Descartada"
    }
  }

	setCandidatureStatusColor(status) {
    if (status === 'FINISHED') {
        return "secondary"
    } else if (status === 'IN_PROGRESS') {
        return "primary"
    } else if (status === 'NEW') {
        return "warning"
    } else if (status === 'PRE_EVALUATION_OK') {
        return "success"
    } else if (status === 'PRE_EVALUATION_NOK') {
        return "danger"
    } else if (status === 'HIRED') {
        return "success"
    } else if (status === 'DISCARDED') {
        return "danger"
    }
  }

  setCandidatureStatusName(status) {
    if (status === 'FINISHED') {
        return "Finalizada"
    } else if (status === 'IN_PROGRESS') {
        return "Em andamento"
    } else if (status === 'NEW') {
        return "Nova"
    } else if (status === 'PRE_EVALUATION_OK') {
        return "Pré-avaliado"
    } else if (status === 'PRE_EVALUATION_NOK') {
        return "Pré-avaliado"
    } else if (status === 'HIRED') {
        return "Contratada"
    } else if (status === 'DISCARDED') {
        return "Descartada"
    }
  }

  setEnabledColor(enabled) {
    if (enabled === true) {
        return "success"
    } else {
        return "secondary"
    }
  }

  setEnabledName(enabled) {
    if (enabled === true) {
        return "Ativo"
    } else {
        return "Inativo"
    }
  }

  setKeyWordFoundColor(found) {
    if (found === true) {
        return "success"
    } else {
        return "secondary"
    }
  }

  setKeyWordFoundName(found) {
    if (found === true) {
        return "Sim"
    } else {
        return "Não"
    }
  }

  validateDocumentNumber(documentNumber) {
    let Soma;
    let Resto;
    Soma = 0;
    let i = 0;
  if (documentNumber == "00000000000") return false;
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(documentNumber.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(documentNumber.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(documentNumber.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(documentNumber.substring(10, 11) ) ) return false;
    return true;
}


// ========== Toast Contents: ============
// eslint-disable-next-line react/prop-types
contentSuccess(message) {
  return (
    <Media>
        <Media middle left className="mr-3">
            <i className="fa fa-fw fa-2x fa-check"></i>
        </Media>
        <Media body>
            <Media heading tag="h6">
                Successo!
            </Media>
        </Media>
    </Media>
  )
}

// eslint-disable-next-line react/prop-types
contentError( message ) {
  return (
    <Media>
        <Media middle left className="mr-3">
            <i className="fa fa-fw fa-2x fa-close"></i>
        </Media>
        <Media body>
            <Media heading tag="h6">
                Erro!
            </Media>
            <p>
                {message}
            </p>
        </Media>
    </Media>
  )
}

// eslint-disable-next-line react/prop-types
errorFillFields() {
  return (
    <Media>
        <Media middle left className="mr-3">
            <i className="fa fa-fw fa-2x fa-close"></i>
        </Media>
        <Media body>
            <Media heading tag="h6">
                Erro!
            </Media>
            <p>
                Existem campos não preenchidos.
            </p>
        </Media>
    </Media>
  )
}

	render() {
		return (
			<React.Fragment>
				{ this.logout.bind( this ) }
				<Link to="/pages/login" className="ml-auto text-decoration-none"/>
			</React.Fragment>
		)
	}
}

