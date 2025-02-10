import React from 'react'
import Button from '../ui/Button';

function CheckOut({totalAmount, setPaymentStatus}) {
    const handlePayment = async ()=>{

        const res = await fetch('https://my-backend-ocyz.onrender.com/api/v1/user/create-order',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({amount:totalAmount, currency: 'INR'})
        })

        const {order} = await res.json();
        console.log(order)
        
        const options = {
            key: 'rzp_test_CODl2p6fBTktbl',
            amount:order.amount,
            currency: order.currency,
            name:'Sumukhji',
            description:'sumukhji test payment',
            order_id: order.id,
            method: {
                upi: true,  // ✅ Enable UPI for testing
                upi_link: true,
                card:true,
                netbanking : true,
                wallet:true
            },
            handler: async (response)=>{
                const verifyRes = await fetch('https://my-backend-ocyz.onrender.com/api/v1/user/verify-payment',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(response)
                })

                const jsonResponse = await verifyRes.json();

                if(jsonResponse.success){
                    alert('payment successful')
                    setPaymentStatus(true)
                }else{
                    alert('payment failed')
                }
            },
            prefill: {
                name: 'Test User',
                email: 'test@gmail.com',
                contact: '9999999999',
                method: 'upi',
                vpa: 'success@razorpay'  // ✅ Simulated UPI ID for testing
            },
            theme:{
                color:'#3399cc'
            }
        }

        const rzp = new window.Razorpay(options);
        rzp.open();
    }


  return (
    <div><Button onClick={handlePayment} variant='primary' text={`Pay ₹${totalAmount}`}/></div>
  )
}

export default CheckOut