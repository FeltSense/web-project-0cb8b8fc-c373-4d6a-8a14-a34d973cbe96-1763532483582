export default function Pricing() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
  <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold text-center mb-2">Retail Business</h2>
    <p className="text-center text-gray-600 mb-8">General</p>
    
    <div className="text-center mb-8">
      <span className="text-5xl font-bold text-blue-600">$29</span>
      <p className="text-gray-600 mt-2">one-time payment</p>
    </div>

    <ul className="space-y-4 mb-8">
      <li className="flex items-center text-gray-700">
        <span className="text-blue-600 mr-3">✓</span>
        <span>Professional Website Design</span>
      </li>
      <li className="flex items-center text-gray-700">
        <span className="text-blue-600 mr-3">✓</span>
        <span>Mobile Responsive Layout</span>
      </li>
      <li className="flex items-center text-gray-700">
        <span className="text-blue-600 mr-3">✓</span>
        <span>SEO Optimized</span>
      </li>
      <li className="flex items-center text-gray-700">
        <span className="text-blue-600 mr-3">✓</span>
        <span>Contact Form Integration</span>
      </li>
      <li className="flex items-center text-gray-700">
        <span className="text-blue-600 mr-3">✓</span>
        <span>Social Media Links</span>
      </li>
      <li className="flex items-center text-gray-700">
        <span className="text-blue-600 mr-3">✓</span>
        <span>Email Support</span>
      </li>
    </ul>

    <button onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=0cb8b8fc-c373-4d6a-8a14-a34d973cbe96'} className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700">
      Get Your Website - $29
    </button>
  </div>
</section>
  );
}