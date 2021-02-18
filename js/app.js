 'use strict';






 const hours = ['6am' ,'7am','8am','9am','10am','11am','12pm ','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
 const shops = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 
 function getRandomNumber(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function CookieShop (name,minimum,maximum, perCustSales){
      this.name=name;
      this.minimum=minimum;
      this.maximum=maximum;
      this.perCustSales=perCustSales;
      this.randomCust=0;
      this.perHourSales=[];
    }

    CookieShop.prototype.randomCustomer=function(){

      this.randomCust=getRandomNumber(this.minimum,this.maximum);

    };


    CookieShop.prototype.render=function(){

      let totalSales=0;

      const dom = document.getElementById('cookiesShop');
      const tr0El = document.createElement('tr');
      dom.appendChild(tr0El);

      const th0El = document.createElement('th');
      tr0El.appendChild(th0El);
      
      th0El.textContent = this.name;

      for (let i = 0; i < hours.length; i++) {
        this.randomCustomer();
        let cookies =this.randomCust * this.perCustSales;
        shops[i]=shops[i]+cookies;
        this.perHourSales.push('${hours[i]} : ${Math.floor(cookies)}');
        totalSales=totalSales+cookies;

        const td0El = document.createElement('td');
        tr0El.appendChild(td0El);
        td0El.textContent = Math.ceil(cookies);
      }
      shops[14]+=Math.ceil(totalSales);
      const td1El = document.createElement('td');
      tr0El.appendChild(td1El);
      td1El.textContent = Math.ceil(totalSales);
    };
    

    function render(){
      const dom = document.getElementById('cookiesShop');
      const tr1El = document.createElement('tr');
      dom.appendChild(tr1El);
    
      const th3El = document.createElement('th');
      tr1El.appendChild(th3El);
      th3El.textContent = ' Location ';

      for (let i = 0; i < hours.length; i++) {
        const th4El = document.createElement('th');
        tr1El.appendChild(th4El);
        th4El.textContent = hours[i];
      }

      const th5El = document.createElement('th');
  tr1El.appendChild(th5El);
  th5El.textContent = 'Daily Total';
    }
    
    const dom = document.getElementById('cookiesShop');
    function render1(){
      const tr3El = document.createElement('tr');
      dom.appendChild(tr3El);
    
      // tr3El.setAttribute('id', 'tr3El');

      const th6El = document.createElement('th');
      tr3El.appendChild(th6El);
      th6El.textContent = 'Totals';
    
      for (let i = 0; i < shops.length; i++) {
        const th7El = document.createElement('th');
        tr3El.appendChild(th7El);
        th7El.textContent = Math.ceil(shops[i]);
      }
    };
    const seattle = new CookieShop('seattle', 23, 65, 6.3);
    const tokyo = new CookieShop('tokyo', 3, 24, 1.2);
    const dubai = new CookieShop('dubai', 11, 38, 3.7);
    const paris = new CookieShop('paris', 20, 38, 2.3);
    const lima = new CookieShop('lima', 2, 16, 4.6);

render();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
render1();




// dom= document.getElementById('cookiesShop');
// dom.parentNode.removeChild(tr3El);


const newStore= [];

const formEl = document.getElementById('add-store');


formEl.addEventListener('submit', function(event) {

    event.preventDefault();

    const newStore = event.target.where.value;
    const minimumCustomers = event.target.minimum_sale.value;
    const maximumCustomers = event.target.maximum_sale.value;
    const averageCookies = event.target.avgerage_sale.value;


    
    dom.deleteRow(-1);

    const newLocation =new CookieShop(newStore, minimumCustomers, maximumCustomers, averageCookies);

  
    newLocation.render();
    
    render1();
   
    
  });
  
  




// const seattle = {

//   name : 'Seattle' ,
//   minimum : 23 ,
//   maximum : 65,
//   randomCust : 0 ,
//   perCustSales : 6.3,
//   totalSales : 0,
//   perHourSales : [],

//   getRandomCust : function(){
    
//     this.randomCust = getRandomNumber (this.minimum,this.maximum);

//   },
//   render : function(){
//     const container = document.getElementById('sales');
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent=this.name;

//     const listEl = document.createElement('ul');
//     sectionEl.appendChild(listEl);

//     for (let i = 0; i < hours.length; i++) {
      
//       this.getRandomCust();
//       let hourSales=this.randomCust * this.perCustSales;
//       this.totalSales= hourSales + this.totalSales;
//       this.perHourSales.push(Math.ceil(hourSales));
//       const listItemEl = document.createElement('li');
//       listEl.appendChild(listItemEl);
//       listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
//     }
//     const listItemEl = document.createElement('li');
//     listEl.appendChild(listItemEl);
//     listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
//   },

// }

// console.log(seattle);
// seattle.render();

// // Tokyo

// const tokyo = {

//   name : 'Tokyo' ,
//   minimum : 3 ,
//   maximum : 24,
//   randomCust : 0 ,
//   perCustSales : 1.2,
//   totalSales : 0,
//   perHourSales : [],

//   getRandomCust : function(){
    
//     this.randomCust = getRandomNumber (this.minimum,this.maximum);

//   },
//   render : function(){
//     const container = document.getElementById('sales');
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent=this.name;

//     const listEl = document.createElement('ul');
//     sectionEl.appendChild(listEl);

//     for (let i = 0; i < hours.length; i++) {
      
//       this.getRandomCust();
//       let hourSales=this.randomCust * this.perCustSales;
//       this.totalSales= hourSales + this.totalSales;
//       this.perHourSales.push(Math.ceil(hourSales));
//       const listItemEl = document.createElement('li');
//       listEl.appendChild(listItemEl);
//       listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
//     }
//     const listItemEl = document.createElement('li');
//     listEl.appendChild(listItemEl);
//     listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
//   },

// }

// console.log(tokyo);
// tokyo.render();



// // Dubai

// const dubai = {

//   name : 'Dubai' ,
//   minimum : 11 ,
//   maximum : 38,
//   randomCust : 0 ,
//   perCustSales : 3.7,
//   totalSales : 0,
//   perHourSales : [],

//   getRandomCust : function(){
    
//     this.randomCust = getRandomNumber (this.minimum,this.maximum);

//   },
//   render : function(){
//     const container = document.getElementById('sales');
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent=this.name;

//     const listEl = document.createElement('ul');
//     sectionEl.appendChild(listEl);

//     for (let i = 0; i < hours.length; i++) {
      
//       this.getRandomCust();
//       let hourSales=this.randomCust * this.perCustSales;
//       this.totalSales= hourSales + this.totalSales;
//       this.perHourSales.push(Math.ceil(hourSales));
//       const listItemEl = document.createElement('li');
//       listEl.appendChild(listItemEl);
//       listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
//     }
//     const listItemEl = document.createElement('li');
//     listEl.appendChild(listItemEl);
//     listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
//   },

// }

// console.log(dubai);
// dubai.render();

// // paris 

// const paris = {

//   name : 'Paris' ,
//   minimum : 20 ,
//   maximum : 38,
//   randomCust : 0 ,
//   perCustSales : 2.3,
//   totalSales : 0,
//   perHourSales : [],

//   getRandomCust : function(){
    
//     this.randomCust = getRandomNumber (this.minimum,this.maximum);

//   },
//   render : function(){
//     const container = document.getElementById('sales');
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent=this.name;

//     const listEl = document.createElement('ul');
//     sectionEl.appendChild(listEl);

//     for (let i = 0; i < hours.length; i++) {
      
//       this.getRandomCust();
//       let hourSales=this.randomCust * this.perCustSales;
//       this.totalSales= hourSales + this.totalSales;
//       this.perHourSales.push(Math.ceil(hourSales));
//       const listItemEl = document.createElement('li');
//       listEl.appendChild(listItemEl);
//       listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
//     }
//     const listItemEl = document.createElement('li');
//     listEl.appendChild(listItemEl);
//     listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
//   },

// }

// console.log(paris);
// paris.render();



// // Lima

// const lima = {

//   name : 'Lima' ,
//   minimum : 2 ,
//   maximum : 16,
//   randomCust : 0 ,
//   perCustSales : 4.6,
//   totalSales : 0,
//   perHourSales : [],

//   getRandomCust : function(){
    
//     this.randomCust = getRandomNumber (this.minimum,this.maximum);

//   },
//   render : function(){
//     const container = document.getElementById('sales');
//     const sectionEl = document.createElement('section');
//     container.appendChild(sectionEl);

//     const nameEl = document.createElement('h2');
//     sectionEl.appendChild(nameEl);
//     nameEl.textContent=this.name;

//     const listEl = document.createElement('ul');
//     sectionEl.appendChild(listEl);

//     for (let i = 0; i < hours.length; i++) {
      
//       this.getRandomCust();
//       let hourSales=this.randomCust * this.perCustSales;
//       this.totalSales= hourSales + this.totalSales;
//       this.perHourSales.push(Math.ceil(hourSales));
//       const listItemEl = document.createElement('li');
//       listEl.appendChild(listItemEl);
//       listItemEl.textContent=`${hours[i]} : ${Math.ceil(hourSales)} `
      
//     }
//     const listItemEl = document.createElement('li');
//     listEl.appendChild(listItemEl);
//     listItemEl.textContent=`Total : ${Math.ceil(this.totalSales)}`;
//   },

// }

// console.log(lima);
// lima.render();
