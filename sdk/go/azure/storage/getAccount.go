// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storage

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Storage Account.
func LookupAccount(ctx *pulumi.Context, args *GetAccountArgs) (*GetAccountResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:storage/getAccount:getAccount", inputs)
	if err != nil {
		return nil, err
	}
	return &GetAccountResult{
		AccessTier: outputs["accessTier"],
		AccountEncryptionSource: outputs["accountEncryptionSource"],
		AccountKind: outputs["accountKind"],
		AccountReplicationType: outputs["accountReplicationType"],
		AccountTier: outputs["accountTier"],
		CustomDomain: outputs["customDomain"],
		EnableBlobEncryption: outputs["enableBlobEncryption"],
		EnableFileEncryption: outputs["enableFileEncryption"],
		EnableHttpsTrafficOnly: outputs["enableHttpsTrafficOnly"],
		Location: outputs["location"],
		PrimaryAccessKey: outputs["primaryAccessKey"],
		PrimaryBlobConnectionString: outputs["primaryBlobConnectionString"],
		PrimaryBlobEndpoint: outputs["primaryBlobEndpoint"],
		PrimaryConnectionString: outputs["primaryConnectionString"],
		PrimaryFileEndpoint: outputs["primaryFileEndpoint"],
		PrimaryLocation: outputs["primaryLocation"],
		PrimaryQueueEndpoint: outputs["primaryQueueEndpoint"],
		PrimaryTableEndpoint: outputs["primaryTableEndpoint"],
		SecondaryAccessKey: outputs["secondaryAccessKey"],
		SecondaryBlobConnectionString: outputs["secondaryBlobConnectionString"],
		SecondaryBlobEndpoint: outputs["secondaryBlobEndpoint"],
		SecondaryConnectionString: outputs["secondaryConnectionString"],
		SecondaryLocation: outputs["secondaryLocation"],
		SecondaryQueueEndpoint: outputs["secondaryQueueEndpoint"],
		SecondaryTableEndpoint: outputs["secondaryTableEndpoint"],
		Tags: outputs["tags"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getAccount.
type GetAccountArgs struct {
	// Specifies the name of the Storage Account
	Name interface{}
	// Specifies the name of the resource group the Storage Account is located in.
	ResourceGroupName interface{}
}

// A collection of values returned by getAccount.
type GetAccountResult struct {
	// The access tier for `BlobStorage` accounts.
	AccessTier interface{}
	// The Encryption Source for this Storage Account.
	AccountEncryptionSource interface{}
	// The Kind of account.
	AccountKind interface{}
	// The type of replication used for this storage account.
	AccountReplicationType interface{}
	// The Tier of this storage account.
	AccountTier interface{}
	// A `custom_domain` block as documented below.
	CustomDomain interface{}
	// Are Encryption Services are enabled for Blob storage? See [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/)
	// for more information.
	EnableBlobEncryption interface{}
	// Are Encryption Services are enabled for File storage? See [here](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/)
	// for more information.
	EnableFileEncryption interface{}
	// Is traffic only allowed via HTTPS? See [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
	// for more information.
	EnableHttpsTrafficOnly interface{}
	// The Azure location where the Storage Account exists
	Location interface{}
	// The primary access key for the Storage Account.
	PrimaryAccessKey interface{}
	// The connection string associated with the primary blob location
	PrimaryBlobConnectionString interface{}
	// The endpoint URL for blob storage in the primary location.
	PrimaryBlobEndpoint interface{}
	// The connection string associated with the primary location
	PrimaryConnectionString interface{}
	// The endpoint URL for file storage in the primary location.
	PrimaryFileEndpoint interface{}
	// The primary location of the Storage Account.
	PrimaryLocation interface{}
	// The endpoint URL for queue storage in the primary location.
	PrimaryQueueEndpoint interface{}
	// The endpoint URL for table storage in the primary location.
	PrimaryTableEndpoint interface{}
	// The secondary access key for the Storage Account.
	SecondaryAccessKey interface{}
	// The connection string associated with the secondary blob location
	SecondaryBlobConnectionString interface{}
	// The endpoint URL for blob storage in the secondary location.
	SecondaryBlobEndpoint interface{}
	// The connection string associated with the secondary location
	SecondaryConnectionString interface{}
	// The secondary location of the Storage Account.
	SecondaryLocation interface{}
	// The endpoint URL for queue storage in the secondary location.
	SecondaryQueueEndpoint interface{}
	// The endpoint URL for table storage in the secondary location.
	SecondaryTableEndpoint interface{}
	// A mapping of tags to assigned to the resource.
	Tags interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
