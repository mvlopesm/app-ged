import pdfMake from 'pdfmake/build/pdfmake'

function allEmployeedPDF(funcionarios){

    pdfMake.fonts = {
        Roboto: {
            normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
            bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
            italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
            bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
        }
    }

    const reportTitle = [
        {
            text: 'Meus Funcionarios',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] // left, top, right, bottom
        }
    ];

    const dados = funcionarios.map((funcionario) => {
        return [
            {text: funcionario.name, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: funcionario.position, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: funcionario.sector, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: funcionario.salary, fontSize: 9, margin: [0, 2, 0, 2]}
        ] 
    });

    const details = [
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*'],
                body: [
                    [
                        {text: 'Nome', style: 'tableHeader', fontSize: 10},
                        {text: 'Cargo', style: 'tableHeader', fontSize: 10},
                        {text: 'Setor', style: 'tableHeader', fontSize: 10},
                        {text: 'Salário', style: 'tableHeader', fontSize: 10}
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines' // headerLineOnly
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

export default allEmployeedPDF;