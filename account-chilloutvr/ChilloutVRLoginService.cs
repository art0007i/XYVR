﻿using XYVR.Core;
using XYVR.Login;

namespace XYVR.AccountAuthority.ChilloutVR;

public class ChilloutVRLoginService : ILoginService
{
    public Task<ConnectionAttemptResult> Connect(ICredentialsStorage credentialsStorage, string guid, ConnectionAttempt connectionAttempt)
    {
        throw new NotImplementedException();
    }

    public Task<ConnectionAttemptResult> Logout(ICredentialsStorage credentialsStorage, string guid)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsLoggedInWithoutRequest(ICredentialsStorage copyOfCredentialsStorage)
    {
        throw new NotImplementedException();
    }
}