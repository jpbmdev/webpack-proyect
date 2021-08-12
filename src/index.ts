export function log(str: string){
    console.log(str)
}

class A {
    greeting = 'HelloWorld'
}

log(new A().greeting);