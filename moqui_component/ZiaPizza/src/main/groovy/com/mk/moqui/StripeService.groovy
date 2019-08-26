package com.mk.moqui
import org.moqui.context.ExecutionContext
import java.util.HashMap;
import java.util.Map;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.net.RequestOptions;
import com.stripe.model.Customer

class StripeService {
    static Map<String, Object> hitStripe(ExecutionContext ec) {
        // Use Stripe key given
        Stripe.apiKey = "sk_test_afMFodBc43bq9EDfLg1uDraM00WDyfXfoG"

        // Amount passed in
        String amount = ec.context.amount

        // Converting the amount passed in to correct format
        Double result = Double.parseDouble(amount)*100
        Integer integerAmount = Math.round(result)
        String processedAmount = Integer.toString(integerAmount)


        //Inserting the amount and other parameters into Stripe's Charge method
        Map<String, Object> params = new HashMap<>();
            params.put("amount", processedAmount);
            params.put("currency", "usd");
            params.put("customer", "cus_FVXGOBCifkiVC6");
        Charge charge = Charge.create(params);

        //Printing out charge details
        println("############ Charge Details #############")
        println("Reciept: ${charge.receiptNumber}")
        println("Status: ${charge.status}")
    }
}