import { Component } from '@angular/core';


enum SubscriptionPlan
{
  Basic='basic',
  Standard='standard',
  Premium='premium',
  Enterprise='enterprise'
}
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})


export class SubscriptionComponent {


  subscriptionPlan:SubscriptionPlan=SubscriptionPlan.Basic;

  SubscriptionPlan=SubscriptionPlan; // exposing enum to the html page

  constructor()
  {
    const randno=Math.random();
    if(randno > 0 && randno<0.25)
    {
      this.subscriptionPlan=SubscriptionPlan.Basic;
    }
    else if(randno>0.25 && randno<0.5)
    {
      this.subscriptionPlan=SubscriptionPlan.Standard;
    }
    else if(randno>0.5 && randno<0.75)
    {
      this.subscriptionPlan=SubscriptionPlan.Premium;
    }
    else 
    {
      this.subscriptionPlan=SubscriptionPlan.Enterprise;
    }
    
  }

}
