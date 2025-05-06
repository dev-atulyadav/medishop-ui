import React from 'react'

const Order = () => {
  // Demo order data
  const orders = [
    {
      id: 1,
      date: '2024-03-15',
      product: 'Paracetamol',
      quantity: 2,
      total: 9.99,
      status: 'Delivered'
    },
    {
      id: 2, 
      date: '2024-03-14',
      product: 'Vitamin C',
      quantity: 1,
      total: 15.99,
      status: 'Processing'
    },
    {
      id: 3,
      date: '2024-03-13', 
      product: 'First Aid Kit',
      quantity: 1,
      total: 29.99,
      status: 'Shipped'
    }
  ];

  return (
    <div className="container mx-auto mt-20 h-screen px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-blue-100 text-blue-800'}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Order;
