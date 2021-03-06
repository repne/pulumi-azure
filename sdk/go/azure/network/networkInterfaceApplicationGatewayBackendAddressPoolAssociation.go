// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages the association between a Network Interface and a Application Gateway's Backend Address Pool.
type NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation struct {
	s *pulumi.ResourceState
}

// NewNetworkInterfaceApplicationGatewayBackendAddressPoolAssociation registers a new resource with the given unique name, arguments, and options.
func NewNetworkInterfaceApplicationGatewayBackendAddressPoolAssociation(ctx *pulumi.Context,
	name string, args *NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationArgs, opts ...pulumi.ResourceOpt) (*NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation, error) {
	if args == nil || args.BackendAddressPoolId == nil {
		return nil, errors.New("missing required argument 'BackendAddressPoolId'")
	}
	if args == nil || args.IpConfigurationName == nil {
		return nil, errors.New("missing required argument 'IpConfigurationName'")
	}
	if args == nil || args.NetworkInterfaceId == nil {
		return nil, errors.New("missing required argument 'NetworkInterfaceId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["backendAddressPoolId"] = nil
		inputs["ipConfigurationName"] = nil
		inputs["networkInterfaceId"] = nil
	} else {
		inputs["backendAddressPoolId"] = args.BackendAddressPoolId
		inputs["ipConfigurationName"] = args.IpConfigurationName
		inputs["networkInterfaceId"] = args.NetworkInterfaceId
	}
	s, err := ctx.RegisterResource("azure:network/networkInterfaceApplicationGatewayBackendAddressPoolAssociation:NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation{s: s}, nil
}

// GetNetworkInterfaceApplicationGatewayBackendAddressPoolAssociation gets an existing NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNetworkInterfaceApplicationGatewayBackendAddressPoolAssociation(ctx *pulumi.Context,
	name string, id pulumi.ID, state *NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationState, opts ...pulumi.ResourceOpt) (*NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["backendAddressPoolId"] = state.BackendAddressPoolId
		inputs["ipConfigurationName"] = state.IpConfigurationName
		inputs["networkInterfaceId"] = state.NetworkInterfaceId
	}
	s, err := ctx.ReadResource("azure:network/networkInterfaceApplicationGatewayBackendAddressPoolAssociation:NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The ID of the Application Gateway's Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
func (r *NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation) BackendAddressPoolId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["backendAddressPoolId"])
}

// The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
func (r *NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation) IpConfigurationName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["ipConfigurationName"])
}

// The ID of the Network Interface. Changing this forces a new resource to be created.
func (r *NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation) NetworkInterfaceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["networkInterfaceId"])
}

// Input properties used for looking up and filtering NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resources.
type NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationState struct {
	// The ID of the Application Gateway's Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
	BackendAddressPoolId interface{}
	// The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
	IpConfigurationName interface{}
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId interface{}
}

// The set of arguments for constructing a NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resource.
type NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationArgs struct {
	// The ID of the Application Gateway's Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
	BackendAddressPoolId interface{}
	// The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
	IpConfigurationName interface{}
	// The ID of the Network Interface. Changing this forces a new resource to be created.
	NetworkInterfaceId interface{}
}
