'use strict';

 

const hours = ['6am' ,'7am','8am','9am','10am','11am','12pm ','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// seattle 
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {

  name : 'Seattle' ,
  minimum : 23 ,
  maximum : 65,
  randomCust : 0 ,
  perCustSales : 6.3,
  totalSales : 0,
  perHourSales : [],

  getRandomCust : function(){
    
    this.randomCust = getRandomNumber (this.minimum,this.maximum);

  },
  render : function(){
    const container = document.getElementById('sales');
    const sectionEl = document.createElement('section');
    container.appendChild(sectionEl);

    const nameEl = document.createElement('h2');
    sectionEl.appendChild(nameEl);
    nameEl.textContent=this.name;

    const listEl = document.createElement('ul');
    sectionEl.appendChild(listEl);

    for (let i = 0; i < hours.length; i++) {
      
      this.getRandomCust();
      let hourSales=this.randomCust * this.perCustSales;
      this.totalSales= hourSales + this.totalSales;
      this.perHourSales.push(Math.ceil(hourSales));
      const listItemEl = document.createElement('li');
      listEl.appendChild(listItemEl);
      listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
    }
    const listItemEl = document.createElement('li');
    listEl.appendChild(listItemEl);
    listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
  },

}

console.log(seattle);
seattle.render();

// Tokyo

const tokyo = {

  name : 'Tokyo' ,
  minimum : 3 ,
  maximum : 24,
  randomCust : 0 ,
  perCustSales : 1.2,
  totalSales : 0,
  perHourSales : [],

  getRandomCust : function(){
    
    this.randomCust = getRandomNumber (this.minimum,this.maximum);

  },
  render : function(){
    const container = document.getElementById('sales');
    const sectionEl = document.createElement('section');
    container.appendChild(sectionEl);

    const nameEl = document.createElement('h2');
    sectionEl.appendChild(nameEl);
    nameEl.textContent=this.name;

    const listEl = document.createElement('ul');
    sectionEl.appendChild(listEl);

    for (let i = 0; i < hours.length; i++) {
      
      this.getRandomCust();
      let hourSales=this.randomCust * this.perCustSales;
      this.totalSales= hourSales + this.totalSales;
      this.perHourSales.push(Math.ceil(hourSales));
      const listItemEl = document.createElement('li');
      listEl.appendChild(listItemEl);
      listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
    }
    const listItemEl = document.createElement('li');
    listEl.appendChild(listItemEl);
    listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
  },

}

console.log(tokyo);
tokyo.render();



// Dubai

const dubai = {

  name : 'Dubai' ,
  minimum : 11 ,
  maximum : 38,
  randomCust : 0 ,
  perCustSales : 3.7,
  totalSales : 0,
  perHourSales : [],

  getRandomCust : function(){
    
    this.randomCust = getRandomNumber (this.minimum,this.maximum);

  },
  render : function(){
    const container = document.getElementById('sales');
    const sectionEl = document.createElement('section');
    container.appendChild(sectionEl);

    const nameEl = document.createElement('h2');
    sectionEl.appendChild(nameEl);
    nameEl.textContent=this.name;

    const listEl = document.createElement('ul');
    sectionEl.appendChild(listEl);

    for (let i = 0; i < hours.length; i++) {
      
      this.getRandomCust();
      let hourSales=this.randomCust * this.perCustSales;
      this.totalSales= hourSales + this.totalSales;
      this.perHourSales.push(Math.ceil(hourSales));
      const listItemEl = document.createElement('li');
      listEl.appendChild(listItemEl);
      listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
    }
    const listItemEl = document.createElement('li');
    listEl.appendChild(listItemEl);
    listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
  },

}

console.log(dubai);
dubai.render();

// paris 

const paris = {

  name : 'Paris' ,
  minimum : 20 ,
  maximum : 38,
  randomCust : 0 ,
  perCustSales : 2.3,
  totalSales : 0,
  perHourSales : [],

  getRandomCust : function(){
    
    this.randomCust = getRandomNumber (this.minimum,this.maximum);

  },
  render : function(){
    const container = document.getElementById('sales');
    const sectionEl = document.createElement('section');
    container.appendChild(sectionEl);

    const nameEl = document.createElement('h2');
    sectionEl.appendChild(nameEl);
    nameEl.textContent=this.name;

    const listEl = document.createElement('ul');
    sectionEl.appendChild(listEl);

    for (let i = 0; i < hours.length; i++) {
      
      this.getRandomCust();
      let hourSales=this.randomCust * this.perCustSales;
      this.totalSales= hourSales + this.totalSales;
      this.perHourSales.push(Math.ceil(hourSales));
      const listItemEl = document.createElement('li');
      listEl.appendChild(listItemEl);
      listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
    }
    const listItemEl = document.createElement('li');
    listEl.appendChild(listItemEl);
    listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
  },

}

console.log(paris);
paris.render();



// Lima

const lima = {

  name : 'Lima' ,
  minimum : 2 ,
  maximum : 16,
  randomCust : 0 ,
  perCustSales : 4.6,
  totalSales : 0,
  perHourSales : [],

  getRandomCust : function(){
    
    this.randomCust = getRandomNumber (this.minimum,this.maximum);

  },
  render : function(){
    const container = document.getElementById('sales');
    const sectionEl = document.createElement('section');
    container.appendChild(sectionEl);

    const nameEl = document.createElement('h2');
    sectionEl.appendChild(nameEl);
    nameEl.textContent=this.name;

    const listEl = document.createElement('ul');
    sectionEl.appendChild(listEl);

    for (let i = 0; i < hours.length; i++) {
      
      this.getRandomCust();
      let hourSales=this.randomCust * this.perCustSales;
      this.totalSales= hourSales + this.totalSales;
      this.perHourSales.push(Math.ceil(hourSales));
      const listItemEl = document.createElement('li');
      listEl.appendChild(listItemEl);
      listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
    }
    const listItemEl = document.createElement('li');
    listEl.appendChild(listItemEl);
    listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
  },

}

console.log(lima);
lima.render();














