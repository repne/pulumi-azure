// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package notificationhub

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Notification Hub within a Notification Hub Namespace.
func LookupHub(ctx *pulumi.Context, args *GetHubArgs) (*GetHubResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["namespaceName"] = args.NamespaceName
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:notificationhub/getHub:getHub", inputs)
	if err != nil {
		return nil, err
	}
	return &GetHubResult{
		ApnsCredentials: outputs["apnsCredentials"],
		GcmCredentials: outputs["gcmCredentials"],
		Location: outputs["location"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getHub.
type GetHubArgs struct {
	// Specifies the Name of the Notification Hub.
	Name interface{}
	// Specifies the Name of the Notification Hub Namespace which contains the Notification Hub.
	NamespaceName interface{}
	// Specifies the Name of the Resource Group within which the Notification Hub exists.
	ResourceGroupName interface{}
}

// A collection of values returned by getHub.
type GetHubResult struct {
	// A `apns_credential` block as defined below.
	ApnsCredentials interface{}
	// A `gcm_credential` block as defined below.
	GcmCredentials interface{}
	// The Azure Region in which this Notification Hub exists.
	Location interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
