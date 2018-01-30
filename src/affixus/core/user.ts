export class User {
    private title: string;
    private name: string;
    private id: number;
    private city : string;

    public constructor(){
        this.city = "Mumbai";
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }
    

    public setName(name:string)  {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setNumber(id: number){
        this.id = id;
    }

    public getNumber(): number {
        return this.id;
    }

    public setCity(city: string) {
        this.city = city;
    }

    public getCity() : string {
        return this.city;
    }
};