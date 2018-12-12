// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage an EventHub Namespace.
 */
export class EventHubNamespace extends pulumi.CustomResource {
    /**
     * Get an existing EventHubNamespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventHubNamespaceState, opts?: pulumi.CustomResourceOptions): EventHubNamespace {
        return new EventHubNamespace(name, <any>state, { ...opts, id: id });
    }

    /**
     * Is Auto Inflate enabled for the EventHub Namespace?
     */
    public readonly autoInflateEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the Capacity / Throughput Units for a `Standard` SKU namespace. Valid values range from 1 - 20.
     */
    public readonly capacity: pulumi.Output<number | undefined>;
    /**
     * The primary connection string for the authorization
     * rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly defaultPrimaryConnectionString: pulumi.Output<string>;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly defaultPrimaryKey: pulumi.Output<string>;
    /**
     * The secondary connection string for the
     * authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly defaultSecondaryConnectionString: pulumi.Output<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly defaultSecondaryKey: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * Specifies the maximum number of throughput units when Auto Inflate is Enabled. Valid values range from 1 - 20.
     */
    public readonly maximumThroughputUnits: pulumi.Output<number>;
    /**
     * Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the namespace. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Defines which tier to use. Valid options are `Basic` and `Standard`.
     */
    public readonly sku: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a EventHubNamespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubNamespaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventHubNamespaceArgs | EventHubNamespaceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: EventHubNamespaceState = argsOrState as EventHubNamespaceState | undefined;
            inputs["autoInflateEnabled"] = state ? state.autoInflateEnabled : undefined;
            inputs["capacity"] = state ? state.capacity : undefined;
            inputs["defaultPrimaryConnectionString"] = state ? state.defaultPrimaryConnectionString : undefined;
            inputs["defaultPrimaryKey"] = state ? state.defaultPrimaryKey : undefined;
            inputs["defaultSecondaryConnectionString"] = state ? state.defaultSecondaryConnectionString : undefined;
            inputs["defaultSecondaryKey"] = state ? state.defaultSecondaryKey : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["maximumThroughputUnits"] = state ? state.maximumThroughputUnits : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as EventHubNamespaceArgs | undefined;
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["autoInflateEnabled"] = args ? args.autoInflateEnabled : undefined;
            inputs["capacity"] = args ? args.capacity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["maximumThroughputUnits"] = args ? args.maximumThroughputUnits : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["defaultPrimaryConnectionString"] = undefined /*out*/;
            inputs["defaultPrimaryKey"] = undefined /*out*/;
            inputs["defaultSecondaryConnectionString"] = undefined /*out*/;
            inputs["defaultSecondaryKey"] = undefined /*out*/;
        }
        super("azure:eventhub/eventHubNamespace:EventHubNamespace", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventHubNamespace resources.
 */
export interface EventHubNamespaceState {
    /**
     * Is Auto Inflate enabled for the EventHub Namespace?
     */
    readonly autoInflateEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the Capacity / Throughput Units for a `Standard` SKU namespace. Valid values range from 1 - 20.
     */
    readonly capacity?: pulumi.Input<number>;
    /**
     * The primary connection string for the authorization
     * rule `RootManageSharedAccessKey`.
     */
    readonly defaultPrimaryConnectionString?: pulumi.Input<string>;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultPrimaryKey?: pulumi.Input<string>;
    /**
     * The secondary connection string for the
     * authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultSecondaryConnectionString?: pulumi.Input<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultSecondaryKey?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the maximum number of throughput units when Auto Inflate is Enabled. Valid values range from 1 - 20.
     */
    readonly maximumThroughputUnits?: pulumi.Input<number>;
    /**
     * Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the namespace. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Defines which tier to use. Valid options are `Basic` and `Standard`.
     */
    readonly sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a EventHubNamespace resource.
 */
export interface EventHubNamespaceArgs {
    /**
     * Is Auto Inflate enabled for the EventHub Namespace?
     */
    readonly autoInflateEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the Capacity / Throughput Units for a `Standard` SKU namespace. Valid values range from 1 - 20.
     */
    readonly capacity?: pulumi.Input<number>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies the maximum number of throughput units when Auto Inflate is Enabled. Valid values range from 1 - 20.
     */
    readonly maximumThroughputUnits?: pulumi.Input<number>;
    /**
     * Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the namespace. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Defines which tier to use. Valid options are `Basic` and `Standard`.
     */
    readonly sku: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
