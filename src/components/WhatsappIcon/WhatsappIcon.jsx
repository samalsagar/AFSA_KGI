import React from 'react'

function WhatsappIcon() {
  return (
    <div>
      <Link
          to="https://wa.me/919348228808?text=Hello How can I help you ?" target='_blank'
          className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition-colors duration-300"
        >
          <span className="text-xl">📞</span>
        </Link>
    </div>
  )
}

export default WhatsappIcon
