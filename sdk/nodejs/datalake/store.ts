// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manage an Azure Data Lake Store.
 */
export class Store extends pulumi.CustomResource {
    /**
     * Get an existing Store resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StoreState, opts?: pulumi.CustomResourceOptions): Store {
        return new Store(name, <any>state, { ...opts, id: id });
    }

    /**
     * Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    public readonly encryptionState: pulumi.Output<string | undefined>;
    /**
     * The Encryption Type used for this Data Lake Store Account. Currently can be set to `SystemManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
     */
    public readonly encryptionType: pulumi.Output<string>;
    /**
     * The Endpoint for the Data Lake Store.
     */
    public /*out*/ readonly endpoint: pulumi.Output<string>;
    /**
     * are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    public readonly firewallAllowAzureIps: pulumi.Output<string | undefined>;
    /**
     * the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    public readonly firewallState: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
     */
    public readonly tier: pulumi.Output<string | undefined>;

    /**
     * Create a Store resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoreArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StoreArgs | StoreState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: StoreState = argsOrState as StoreState | undefined;
            inputs["encryptionState"] = state ? state.encryptionState : undefined;
            inputs["encryptionType"] = state ? state.encryptionType : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["firewallAllowAzureIps"] = state ? state.firewallAllowAzureIps : undefined;
            inputs["firewallState"] = state ? state.firewallState : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tier"] = state ? state.tier : undefined;
        } else {
            const args = argsOrState as StoreArgs | undefined;
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["encryptionState"] = args ? args.encryptionState : undefined;
            inputs["encryptionType"] = args ? args.encryptionType : undefined;
            inputs["firewallAllowAzureIps"] = args ? args.firewallAllowAzureIps : undefined;
            inputs["firewallState"] = args ? args.firewallState : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["tier"] = args ? args.tier : undefined;
            inputs["endpoint"] = undefined /*out*/;
        }
        super("azure:datalake/store:Store", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Store resources.
 */
export interface StoreState {
    /**
     * Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    readonly encryptionState?: pulumi.Input<string>;
    /**
     * The Encryption Type used for this Data Lake Store Account. Currently can be set to `SystemManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
     */
    readonly encryptionType?: pulumi.Input<string>;
    /**
     * The Endpoint for the Data Lake Store.
     */
    readonly endpoint?: pulumi.Input<string>;
    /**
     * are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    readonly firewallAllowAzureIps?: pulumi.Input<string>;
    /**
     * the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    readonly firewallState?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
     */
    readonly tier?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Store resource.
 */
export interface StoreArgs {
    /**
     * Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    readonly encryptionState?: pulumi.Input<string>;
    /**
     * The Encryption Type used for this Data Lake Store Account. Currently can be set to `SystemManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
     */
    readonly encryptionType?: pulumi.Input<string>;
    /**
     * are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    readonly firewallAllowAzureIps?: pulumi.Input<string>;
    /**
     * the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    readonly firewallState?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
     */
    readonly tier?: pulumi.Input<string>;
}
