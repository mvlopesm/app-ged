import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

const funcionariosPDF = (funcionarios) => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportHeader = [
        {
           text: "Funcionarios",
           fontSize: 18,
           bold: true,
           margin: [15, 20, 0, 45]
        }
    ];

    const dados = funcionarios.map((funcionario) => {
        return [
            {text: funcionario.name, style:'tableHeader', fontSize:10, margin: [0,2,0,2]},
            {text: funcionario.sector, style:'tableHeader', fontSize:10, margin: [0,2,0,2]},
            {text: funcionario.position, style:'tableHeader', fontSize:10, margin: [0,2,0,2]},
            {text: funcionario.salary, style:'tableHeader', fontSize:10, margin: [0,2,0,2]},
            {text: funcionario.admission, style:'tableHeader', fontSize:10, margin: [0,2,2,2]}
        ]
    })
    const details = [
        {
            table : {
                headerRows: 1,
                widths: ["*", "*", "*", "*", "*"],
                body: [
                    [
                        {text: 'Nome', style:'tableHeader', fontSize:12},
                        {text: 'Setor', style:'tableHeader', fontSize:12},
                        {text: 'Cargo', style:'tableHeader', fontSize:12},
                        {text: 'Salário', style:'tableHeader', fontSize:12},
                        {text: 'Data de Admissão', style:'tableHeader', fontSize:12}
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines'
        }
    ];

    const Footer = (currentPage, pageCount) => {
        return(
            {
                text: currentPage + '/' + pageCount,
                alignment: 'right',
                fontSize: 15,
                bold: true,
                margin: [0, 10, 20, 0]
             } 
        )
    }

    const reportfooter = [];

    const docDefinitions = {
        pageSize: "A4",
        pageMargins: [15, 50, 15, 40],

        header: [reportHeader],
        content: [details],
        footer: [reportfooter]
    }
    pdfMake.createPdf(docDefinitions).download();
}

export default funcionariosPDF