import pdfMake from 'pdfmake/build/pdfmake'

async function employeeById(employeeInformation){

    pdfMake.fonts = {
        Roboto: {
            normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
            bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
            italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
            bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
        }
    }

    const dados = employeeInformation[0]
    var imgURL = dados.imageURL    


    async function imageToDataURL(imgURL) {
        let img = await fetch(`${imgURL}`);
        // @ts-ignore
        img = await img.blob();
        // @ts-ignore
        let bitmap = await createImageBitmap(img);
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
        return canvas.toDataURL("image/png");
        // image compression? 
        // return canvas.toDataURL("image/png", 0.9);
      };

      const teste = async() => {
        var dataUrl = await imageToDataURL(`${dados.imgURL}`);
        return dataUrl
      }
      
      const newURL = await teste();
      console.log(newURL)

    const reportTitle = [
        {
            text: 'Informações do Funcionário',
            color: '#388cc8',
            fontSize: 20,
            bold: true,
            margin: [15, 20, 0, 45] // left, top, right, bottom
        }
    ];

    const details = [
        {   
            margin: [0,20,0,0],
			style: 'tableExample',
			table: {
                widths: [400],
                align: 'center',
                heights: [20],
				body: [
					[{text:`Nome: ${dados.name}`, borderColor: ['#388cc8', '#388cc8', '#388cc8', '#388cc8']}]
				]
			}
		},
        {   
            margin: [0,10,0,0],
			style: 'tableExample',
			table: {
                widths: [400],
                align: 'center',
                heights: [20],
				body: [
					[{text: `Sexo: ${dados.genre}`, borderColor: ['#388cc8', '#388cc8', '#388cc8', '#388cc8']} ]
				]
			}
		},
        {   
            margin: [0,10,0,0],
            image: `${newURL}`,
            width: 150,
			height: 150,
        },
        {   
            margin: [0,10,0,0],
			style: 'tableExample',
			table: {
                widths: [400],
                align: 'center',
                heights: [20],
				body: [
					[{text: `Endereço: ${dados.address}`, borderColor: ['#388cc8', '#388cc8', '#388cc8', '#388cc8']}]
				]
			}
		},
        {   
            margin: [0,10,0,0],
			style: 'tableExample',
			table: {
                widths: [400],
                align: 'center',
                heights: [20],
				body: [
					[{text: `Telefone: ${dados.phone}`, borderColor: ['#388cc8', '#388cc8', '#388cc8', '#388cc8']}]
				]
			}
		},
        {   
            margin: [0,10,0,0],
			style: 'tableExample',
			table: {
                widths: [400],
                align: 'center',
                heights: [20],
				body: [
					[{text: `Data de Nascimento: ${dados.birthdayDate}`, borderColor: ['#388cc8', '#388cc8', '#388cc8', '#388cc8']}]
				]
			}
		},
        {   
            margin: [0,10,0,0],
			style: 'tableExample',
			table: {
                widths: [400],
                align: 'center',
                heights: [20],
				body: [
					[{text: `Cargo: ${dados.position}`, borderColor: ['#388cc8', '#388cc8', '#388cc8', '#388cc8']}]
				]
			}
		},
        {   
            margin: [0,10,0,0],
			style: 'tableExample',
			table: {
                widths: [400],
                align: 'center',
                heights: [20],
				body: [
					[{text:`Data de Admissão: ${dados.admission}`, borderColor: ['#388cc8', '#388cc8', '#388cc8', '#388cc8']}],
				]
			}
		},
        {   
            margin: [0,10,0,0],
			style: 'tableExample',
			table: {
                widths: [400],
                align: 'center',
                heights: [20],
				body: [
					[{text: `Setor: ${dados.sector}`, borderColor: ['#388cc8', '#388cc8', '#388cc8', '#388cc8']}],
				]
			}
		},
        {   
            margin: [0,10,0,0],
			style: 'tableExample',
			table: {
                widths: [400],
                align: 'center',
                heights: [20],
				body: [
					[{text: `Salário: ${dados.salary}`, borderColor: ['#388cc8', '#388cc8', '#388cc8', '#388cc8']}],
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