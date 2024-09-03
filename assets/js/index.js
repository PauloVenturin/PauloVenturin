// ============================= MENU HABILITIES ============================= //
function menu_habilities(){
    const input_tecnologies = document.querySelector('input#tecnologies'),
    input_courses = document.querySelector('input#courses'),
    input_certificates = document.querySelector('input#certificates')


    if(window.innerWidth <= '750'){
        var numPercent = 30
    }else{
        var numPercent = 16
    }

    console.log('Tech', input_tecnologies.checked)
    console.log('Cour', input_courses.checked)
    console.log('Cert', input_certificates.checked)

    if(input_tecnologies.checked){

        console.log('TECH CHECKED \N\N =============')
        document.querySelector('div.tecnologies').classList.remove('hidden')
        document.querySelector('div.tecnologies').classList.add('show')

        document.querySelector('div.courses').classList.add('hidden')
        document.querySelector('div.courses').classList.remove('show')
        document.querySelector('div.certificates').classList.add('hidden')
        document.querySelector('div.certificates').classList.remove('show')

        document.querySelector('div.l16').style.marginLeft = '0%'
        document.querySelector('div.l32').style.marginLeft = '0%'

    } else if(input_courses.checked){

        console.log('COURSES CHECKED \N\N =============')


        document.querySelector('div.courses').classList.remove('hidden')
        document.querySelector('div.courses').classList.add('show')

        document.querySelector('div.tecnologies').classList.add('hidden')
        document.querySelector('div.tecnologies').classList.remove('show')
        document.querySelector('div.certificates').classList.add('hidden')
        document.querySelector('div.certificates').classList.remove('show')

        
        document.querySelector('div.l16').style.marginLeft = '16%'
        document.querySelector('div.l32').style.marginLeft = '32%'

    } else if(input_certificates.checked){

        console.log('CERTIFICATES CHECKED \N\N =============')


        document.querySelector('div.certificates').classList.remove('hidden')
        document.querySelector('div.certificates').classList.add('show')

        document.querySelector('div.tecnologies').classList.add('hidden')
        document.querySelector('div.tecnologies').classList.remove('show')
        document.querySelector('div.courses').classList.add('hidden')
        document.querySelector('div.courses').classList.remove('show')

        document.querySelector('div.l16').style.marginLeft = '32%'
        document.querySelector('div.l32').style.marginLeft = '64%'


    } else {

        document.querySelector('div.tecnologies').classList.add('hidden')
        document.querySelector('div.tecnologies').classList.remove('show')
        document.querySelector('div.courses').classList.add('hidden')
        document.querySelector('div.courses').classList.remove('show')
        document.querySelector('div.certificates').classList.add('hidden')
        document.querySelector('div.certificates').classList.remove('show')

        document.querySelector('div.line-purple-menu').style.display = 'none'
    }

}
menu_habilities()

document.querySelector('div.menu-habilities').addEventListener('change', menu_habilities)
// =========================================================================== //
