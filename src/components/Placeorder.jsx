import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { quantity, ...item } = location.state;
  const selectedItem = location.state;

  const [customerName, setCustomerName] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const customerNameInput = document.querySelector('input[name="customerName"]');
    if (customerNameInput) {
      setCustomerName(customerNameInput.value);
    }

    const customerMobileInput = document.querySelector('input[name="customerMobile"]');
    if (customerMobileInput) {
      setCustomerMobile(customerMobileInput.value);
    }

    const customerEmailInput = document.querySelector('input[name="customeremail"]');
    if (customerEmailInput) {
      setCustomerEmail(customerEmailInput.value);
    }

    const customerAddressInput = document.querySelector('input[name="address"]');
    if (customerAddressInput) {
      setCustomerAddress(customerAddressInput.value);
    }

    const paymentMethodInput = document.querySelector('input[name="paymentMethod"]:checked');
    if (paymentMethodInput) {
      setPaymentMethod(paymentMethodInput.value);
    }
  }, []);

  const handleDownloadPdf = () => {
    if (!selectedItem) {
      console.error("Selected item not found");
      return;
    }

    const doc = new jsPDF();

    // Set font and font size
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");

    // Add company logo and title
    doc.text("KAP-CD Company", 70, 20);
    doc.setFontSize(14);
    doc.text("Billing Invoice", 80, 30);

    // Add order details
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Order Date: ${new Date().toLocaleDateString()}`, 160, 50);
    doc.text(`Order Number: #${Math.floor(Math.random() * 100000)}`, 160, 60);
    doc.text(`Customer Name: ${customerName}`, 15, 75);
    doc.text(`Customer Mobile: ${customerMobile}`, 15, 85);
    doc.text(`Customer Email: ${customerEmail}`, 15, 95);
    doc.text(`Customer Address: ${customerAddress}`, 15, 105);

    // Add product details
    doc.text("Product Details:", 15, 120);
    doc.text(`--------------------------------------------`, 15, 125);
    doc.text(`Product Name: ${selectedItem.name}`, 15, 135);
    doc.setFontSize(12);
    doc.text(`Price:  ${selectedItem.price}`, 15, 145);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Quantity: ${selectedItem.quantity}`, 15, 155);
    doc.text(`Discount: ${selectedItem.discount}%`, 15, 165);
    doc.setFontSize(12);
    doc.text(`Total:  ${(selectedItem.price - (selectedItem.price * (selectedItem.discount / 100))).toFixed(2)}`, 15, 175);

    // Add payment method
    doc.text("Payment Method:", 15, 195);
    doc.text(`---------------------------------------------`, 15, 200);
    doc.text(` ${paymentMethod}`, 15, 207);

    // Add footer
    doc.setFontSize(11);
    doc.text("Thank you for your Shopping!", 85, 230);
    doc.text("KAP-CD CEO ", 170, 240);
    doc.text("Krushna Waghumbare", 164, 250);

    // Output PDF
    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'order_invoice.pdf';
    a.click();
  };

  const handlePlaceOrder = () => {
    // Call API or perform action to place order
    alert('Order placed successfully !');
    handleDownloadPdf();
    navigate('/');
  };

  const goback = () => {
    navigate('/cart');
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Place Order</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <img src={selectedItem.url} alt={selectedItem.name} className="w-100 h-72 object-contain mb-4" />
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
          <p className="text-gray-600">{selectedItem.desc}</p>
          <p className="text-lg font-bold mb-4">Price: ₹ {selectedItem.price}</p>
          <p className="text-lg font-bold mb-4">Quantity: {selectedItem.quantity}</p>
          <p className="text-lg font-bold mb-4">Discount: {selectedItem.discount}%</p>
          <p className="text-lg font-bold mb-4">Total: ₹ {(selectedItem.price - (selectedItem.price * (selectedItem.discount / 100))).toFixed(2)}</p>
        </div>
        <div className="w-full md:w-full xl:w-full p-4">
          <h1 className='text-2xl font-bold'>Customer Details:</h1>
          <form>
            <div className='grid grid-cols-12 gap-3 mt-2'>
              <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                <input type="text" placeholder='Enter Your Name' className='form-control' name="customerName" onChange={(e) => setCustomerName(e.target.value)} />
              </div>
              <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                <input type="text" placeholder='Enter Your mobile' name='customerMobile' className='form-control' onChange={(e) => setCustomerMobile(e.target.value)} />
              </div>
              <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                <input type="text" placeholder='Enter Your Email' name='customeremail' className='form-control' onChange={(e) => setCustomerEmail(e.target.value)} />
              </div>
              <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                <input type="text" placeholder='Enter Your Alternate mobile number' className='form-control' />
              </div>
              <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                <input type="text" placeholder='Enter Your Address ' name='address' className='form-control' onChange={(e) => setCustomerAddress(e.target.value)} />
              </div>
              <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                <input type="text" placeholder='Enter Your State' className='form-control' />
              </div>
              <div className='col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12'>
                <input type="text" placeholder='Enter Your Country' className='form-control' />
              </div>
              <div className='col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12'>
                <h1 className='font-bold text-2xl mt-2'>Payment Method:</h1>
                <label className='p-4'>
                  <input type="radio" name="paymentMethod" value="cash" onChange={(e) => setPaymentMethod(e.target.value)} /> Cash On Delivery
                </label>
                <label className='p-4'>
                  <input type="radio" name="paymentMethod" value="online" onChange={(e) => setPaymentMethod(e.target.value)} /> Online Payment
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-red-400 p-2 rounded" onClick={goback}>Go Back</button>
        <button className="bg-green-400 p-2 rounded ml-4" onClick={handlePlaceOrder}>Place Order</button>
        {/* <button className="bg-blue-400 p-2 rounded ml-4" onClick={handleDownloadPdf}>Download PDF</button> */}
      </div>
    </div>
  );
};

export default PlaceOrder;
