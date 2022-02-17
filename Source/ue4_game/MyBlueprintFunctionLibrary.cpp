// Fill out your copyright notice in the Description page of Project Settings.


#include "MyBlueprintFunctionLibrary.h"

const FString UMyBlueprintFunctionLibrary::GetNetworkURL(UObject* WorldContextObject)
{
	if (WorldContextObject)
	{
		if (UWorld* World = WorldContextObject->GetWorld())
		{
			return World->GetAddressURL();
		}
	}
	return "";
}
