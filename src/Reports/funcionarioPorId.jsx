import pdfMake from 'pdfmake/build/pdfmake'

function employeeById(employeeInformation){

    pdfMake.fonts = {
        Roboto: {
            normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
            bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
            italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
            bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
        }
    }

    const dados = employeeInformation[0]


    const reportTitle = [
        {
            text: 'Informações do Funcionário',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] // left, top, right, bottom
        }
    ];

    const details = [
        {
			style: 'tableExample',
            widths: 400,
			table: {
				body: [
					[`Nome: ${dados.name}`],
					[`Sexo: ${dados.genre}`],
                    [`Endereço: ${dados.address}`],
                    [`Telefone: ${dados.phone}`],
                    [`Data de Nascimento: ${dados.birthdayDate}`],
                    [`Cargo: ${dados.position}`],
                    [`Data de Admissão: ${dados.admission}`],
                    [`Setor: ${dados.sector}`],
                    [`Salário: ${dados.salary}`]
				]
			}
		}
    ];

    function Rodape(currentPage, pageCount){
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0] // left, top, right, bottom
            }
        ]
    }

    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: Rodape
    }

    // @ts-ignore
    pdfMake.createPdf(docDefinition).download();
}

export default employeeById;