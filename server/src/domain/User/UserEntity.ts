export class UserEntity {
    private id: string;
    private firstName: string;
    private lastName: string;
    private avatar: string;
    private email: string;

    get Id(): string { return this.id }
    set Id(value: string) { this.id = value }

    get FirstName(): string { return this.firstName }
    set FirstName(value: string) { this.firstName = value }

    get LastName(): string { return this.lastName }
    set LastName(value: string) { this.lastName = value }

    get Avatar(): string { return this.avatar }
    set Avatar(value: string) { this.avatar = value }

    get Email(): string { return this.email }
    set Email(value: string) { this.email = value }

}