import { Bike } from "./bike";
import { User } from "./user";

export class Rent{
   private constructor(
      public user: User,
      public bike: Bike,
      public dateFrom: Date,
      public dateTo: Date,
      public dateReturned?: Date
    ) {}


static create(rents: Rent[], user: User, bike: Bike, startDate: Date, endDate: Date) {
    const canCreate = Rent.canRent(rents, startDate, endDate);
    if (canCreate) {
        return new Rent(user, bike, startDate, endDate);
    }
    throw new Error('Rent not available');
}


static canRent(rents: Rent[], startDate: Date, endDate: Date):
    boolean {
       return !rents.some(rent => {
            return startDate <= rent.dateTo &&
                endDate >= rent.dateFrom;
        
         })

    }

}


const bike = new Bike('bike1', 'mountain', 30, 100.5, 100, 'mydesc', 5, [])
const user = new User('teste','teste@gmail.com','123')
const today = new Date();
const twodaysLater = new Date();
twodaysLater.setDate(twodaysLater.getDate() + 2);
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const twodaysAfterTomorrow = new Date();
twodaysAfterTomorrow.setDate(twodaysAfterTomorrow.getDate() + 2);

const rent1 = Rent.create([], user, bike, today, twodaysLater);
//const rent2 = Rent.create([rent1], user, bike, today,twodaysLater);

console.log(rent1);
