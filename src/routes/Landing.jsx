import React from 'react'
import {Link} from 'react-router-dom'
import {Notebook,CheckCircle,Zap,Lock} from 'lucide-react'

function Landing () {
   return (
     <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
       <div className="container mx-auto px-4 py-16">
         <div className="text-center mb-16">
           <div className="flex justify-center mb-6">
             <Notebook className=" h-16 w-16 text-indigo-600" />
           </div>
           <h1 className="text-4xl md:text-5xl font-bold text-gray-600 max-w-2xl mx-auto">
             Capture your ideas with QuickNotes
           </h1>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
             QuickNotes is a simple and intuitive note-taking app that helps you
             capture your ideas and thoughts quickly and easily.
           </p>
           <div>
             <Link
               to="/signup"
               className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
             >
               Get Started Free
             </Link>
             <Link
               className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
               to="/login"
             >
               Sign in
             </Link>
           </div>
         </div>

         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div>
               <Zap className="h-6 w-6 text-indigo-600" />
               <h3>Lighting Fast</h3>
             </div>
             <p>
               Create and access your notes instantly with our real-time syncing
               technology. No more waiting for your notes to load.
             </p>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div>
               <Lock className="h-6 w-6 text indigo-600"/>
               <h3>Secure & Private</h3>
             </div>
             <p>
                Your notes are encrypted and stored securely. We value your
                privacy and never share your data with third parties.
             </p>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
             <div>
               <CheckCircle className="h-6 w-6 text-indigo-600" />
               <h3>Easy to Use</h3>
             </div>
             <p>
               Clean and intuitive interface that lets you focus on what matters.
             </p>
           </div>
         </div>
       </div>
     </div>
   );
}
export default Landing;