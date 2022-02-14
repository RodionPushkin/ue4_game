// Fill out your copyright notice in the Description page of Project Settings.


#include "GetServerPort.h"

const FString UWoosahBPLibrary::GetHost(UObject* WorldContextObject)
{
    if (WorldContextObject)
    {
        if (UWorld* World = WorldContextObject->GetWorld())
        {
            bool canBind = false;
            TSharedRef<FInternetAddr> localIp = ISocketSubsystem::Get(PLATFORM_SOCKETSUBSYSTEM)->GetLocalHostAddr(*GLog, canBind);
            return (localIp->IsValid() ? localIp->ToString(false) : World->URL.Host);
            //return World->URL.Host;
        }
    }
    return "WorldContextObject is FALSE";
}


const FString UWoosahBPLibrary::GetPortNumber(UObject* WorldContextObject)
{
    if (WorldContextObject)
    {
        if (UWorld* World = WorldContextObject->GetWorld())
        {
            return FString::FromInt(World->URL.Port);
        }
    }
    return "WorldContextObject is FALSE";
}
