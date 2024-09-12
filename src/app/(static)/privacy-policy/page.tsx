export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Chính sách bảo mật</h1>
                <p className="mb-4">
                    Mọi dữ liệu liên quan đến tài khoản cá nhân chỉ lưu trữ trên thiết bị cài đặt Kodi của bạn.
                </p>
                <p className="mb-4">
                    Add-on Google Drive truy cập và lấy thông tin dữ liệu trong Google Drive của bạn trực tiếp từ ứng dụng Kodi và không thông qua bên thứ 3 nào.
                </p>
                <h2 className="text-2xl font-bold mb-4">Phần dành cho nhà phát triển:</h2>
                <h3 className="text-xl font-semibold mb-2">Google Drive:</h3>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200">Scope</th>
                            <th className="py-2 px-4 bg-gray-200">Use/Need</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">https://www.googleapis.com/auth/drive.readonly</td>
                            <td className="border px-4 py-2">Access your file information in Read Only mode to be able to navigate your files and play them in Kodi.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">https://www.googleapis.com/auth/drive.photos.readonly</td>
                            <td className="border px-4 py-2">Access your photos in Read Only mode to be able to navigate your photos and display them in Kodi.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">profile</td>
                            <td className="border px-4 py-2">Access your profile information to display your account as an option menu in Kodi.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
