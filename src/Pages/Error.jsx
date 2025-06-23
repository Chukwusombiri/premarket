import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
function Error() {
    const error = useRouteError();
    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary text-white px-4">
            <div className="text-center">
                {isRouteErrorResponse(error) ? (
                    <>
                        <h1 className="text-5xl inter-bold mb-4 text-blue-600">Error {error.status}</h1>
                        <p className="text-xl mb-2">{error.statusText}</p>
                        <p className="text-xl mb-6">{error.data}</p>
                    </>
                ) : (
                    <div>
                        <h1 className="text-6xl font-bold mb-4">Ooops!!</h1>
                        <p className="text-xl mb-6">{error?.message || 'Unknown error occurred'}</p>
                    </div>
                )}


                <Link
                    to="/"
                    className="mt-6 inline-flex items-center gap-2 bg-white text-secondary font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
                >
                    <FaArrowLeft />
                    Go back home
                </Link>
            </div>
        </div>
    );
}

export default Error;
