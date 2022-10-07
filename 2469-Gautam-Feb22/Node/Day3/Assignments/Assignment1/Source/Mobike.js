class Mobike {

    bikenumber = '';
    phonenumber = '';
    customername = '';
    days = 0;
    payment = 0;

    Compute() {
        let charge=0;
        if(this.days>0 && this.days<=5)
        {
          charge = 500*this.days;
        }
        else if(this.days>5 && this.days<=10)
        {
          charge = (500*5)+(400*(this.days-5));
        }
        else if(this.days>10)
        {
          charge = (500*5)+(400*5)+200*(this.days-10);
        }
        return charge;
      }
  }

  module.exports.Mobike = Mobike;

