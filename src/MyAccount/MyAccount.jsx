import React ,{ useState, useEffect } from 'react';

const MyAccount = () => {
  const [savedData, setSavedData] = useState({
    firstName: 'nian',
    lastName: 'Azizi',
    email: 'nianazizi174@gmail.com',
    address: 'Kingston'
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const localData = localStorage.getItem('userProfile');
    if (localData) {
      const parsed = JSON.parse(localData);
      setSavedData(parsed);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
    setSuccess(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const dataToSave = {
        ...savedData,
        firstName: formData.firstName || savedData.firstName,
        lastName: formData.lastName || savedData.lastName,
        email: formData.email || savedData.email,
        address: formData.address || savedData.address,
    };
    localStorage.setItem('userProfile', JSON.stringify(dataToSave));
    setSavedData(dataToSave);
    setSuccess(true);
  };

  const handleCancel = () => {
    setFormData({
      firstName: '', lastName: '', email: '', address: '',
      currentPassword: '', newPassword: '', confirmPassword: ''
    });
    setError('');
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-white py-14 font-sans text-black" dir="ltr">
      <div className="max-w-[1170px] mx-auto px-4">
        
        <div className="flex justify-between items-center mb-20 text-[14px]">
          <div className="text-gray-400">
            Home <span className="mx-2">/</span > <span className="text-black">My Account</span>
          </div >
          <div className="text-gray-600">
            Welcome! <span className="text-[#DB4444] font-medium">My Account</span>
          </div >
        </div >

        <div className="flex gap-20">
          <aside className="w-[220px] flex-shrink-0">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[16px] mb-4 text-black">Manage My Account</h3>
                <ul className="space-y-3 pl-6 text-[15px] text-gray-500">
                  <li><a href="#" className="text-[#DB4444]">My Profile</a></li>
                  <li><a href="#" className="hover:text-black">Address Book</a></li>
                  <li><a href="#" className="hover:text-black">My Payment Options</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[16px] mb-4 text-black">My Orders</h3>
                <ul className="space-y-3 pl-6 text-[15px] text-gray-500">
                  <li><a href="#" className="hover:text-black">My Returns</a></li>
                  <li><a href="#" className="hover:text-black">My Cancellations</a></li>
                </ul>
              </div>
            </div>
          </aside>

          <main className="flex-1 bg-white p-10 shadow-[0_1px_13px_rgba(0,0,0,0.05)] rounded-[4px]">
            <h1 className="text-[20px] font-medium text-[#DB4444] mb-8">Edit Your Profile</h1>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            {success && <div className="text-green-600 text-sm mb-4">Changes saved successfully!</div>}

            <form onSubmit={handleSave} className="space-y-6">
              
              <div className="flex gap-12">
                <div className="flex-1">
                  <label className="block text-[14px] text-gray-600 mb-2">First Name</label>

                  <input type="text" name="firstName" placeholder="Md" value={formData.firstName} onChange={handleChange} autoComplete="off"
                    className="w-full bg-[#F5F5F5] border-none p-4 rounded-[4px] text-[15px] outline-none placeholder:text-gray-400" />
                </div >
                <div className="flex-1">
                  <label className="block text-[14px] text-gray-600 mb-2">Last Name</label>
                  <input type="text" name="lastName" placeholder="Rimel" value={formData.lastName} onChange={handleChange} autoComplete="off"
                    className="w-full bg-[#F5F5F5] border-none p-4 rounded-[4px] text-[15px] outline-none placeholder:text-gray-400" />
                </div >
              </div >

              <div className="flex gap-12">
                <div className="flex-1">
                  <label className="block text-[14px] text-gray-600 mb-2">Email</label>
                  <input type="email" name="email" placeholder="rimel1111@gmail.com" value={formData.email} onChange={handleChange} autoComplete="off"
                    className="w-full bg-[#F5F5F5] border-none p-4 rounded-[4px] text-[15px] outline-none placeholder:text-gray-400" />
                </div >
                <div className="flex-1">
                  <label className="block text-[14px] text-gray-600 mb-2">Address</label>
                  <input type="text" name="address" placeholder="Kingston, 5236, United State" value={formData.address} onChange={handleChange} autoComplete="off"
                    className="w-full bg-[#F5F5F5] border-none p-4 rounded-[4px] text-[15px] outline-none placeholder:text-gray-400" />
                </div >
              </div >

              <div className="space-y-4 pt-4">
                <h2 className="text-[16px] text-black font-normal">Password Changes</h2>
                
                <input type="password" name="currentPassword" placeholder="Current Password" value={formData.currentPassword} onChange={handleChange} autoComplete="new-password"
                  className="w-full bg-[#F5F5F5] border-none p-4 rounded-[4px] text-[15px] outline-none placeholder:text-gray-400" />

                <div className="flex gap-12">
                  <div className="flex-1">
                    <label className="block text-[14px] text-gray-600 mb-2">New Password</label>
                    <input type="password" name="newPassword" placeholder="New Password" value={formData.newPassword} onChange={handleChange} autoComplete="new-password"
                      className="w-full bg-[#F5F5F5] border-none p-4 rounded-[4px] text-[15px] outline-none placeholder:text-gray-400" />
                  </div >
                  <div className="flex-1">
                    <label className="block text-[14px] text-gray-600 mb-2">Confirm New Password</label>
                    <input type="password" name="confirmPassword" placeholder="Confirm New Password" value={formData.confirmPassword} onChange={handleChange} autoComplete="new-password"
                      className="w-full bg-[#F5F5F5] border-none p-4 rounded-[4px] text-[15px] outline-none placeholder:text-gray-400" />
                  </div >
                </div>
              </div>

              <div className="flex items-center justify-end gap-6 pt-6">
                <button type="button" onClick={handleCancel} className="text-[16px] text-black hover:text-[#DB4444] transition-all">
                  Cancel
                </button>
                <button type="submit" className="bg-[#DB4444] text-white px-12 py-4 rounded-[4px] text-[16px] hover:bg-[#E05757] transition-all shadow-sm">
                  Save Changes
                </button>
              </div>

            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
