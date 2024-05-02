export class Account {
    address: string;
    balance: number;
  
    constructor(address: string, balance: number) {
      this.address = address;
      this.balance = balance;
    }
    transfer(recipient: string, amount: number) {
        if (this.balance < amount) {
          console.log('Insufficient balance');
          return;
        }
        this.balance -= amount;
        console.log(`Transferred ${amount} to ${recipient}. Remaining balance: ${this.balance}`);
      }
  }