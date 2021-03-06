// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Enables you to manage DNS SRV Records within Azure DNS.
 */
export class SrvRecord extends pulumi.CustomResource {
    /**
     * Get an existing SrvRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SrvRecordState): SrvRecord {
        return new SrvRecord(name, <any>state, { id });
    }

    /**
     * The name of the DNS SRV Record.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A list of values that make up the SRV record. Each `record` block supports fields documented below.
     */
    public readonly records: pulumi.Output<{ port: number, priority: number, target: string, weight: number }[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    public readonly ttl: pulumi.Output<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly zoneName: pulumi.Output<string>;

    /**
     * Create a SrvRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SrvRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SrvRecordArgs | SrvRecordState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SrvRecordState = argsOrState as SrvRecordState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["records"] = state ? state.records : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["zoneName"] = state ? state.zoneName : undefined;
        } else {
            const args = argsOrState as SrvRecordArgs | undefined;
            if (!args || args.records === undefined) {
                throw new Error("Missing required property 'records'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.ttl === undefined) {
                throw new Error("Missing required property 'ttl'");
            }
            if (!args || args.zoneName === undefined) {
                throw new Error("Missing required property 'zoneName'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["records"] = args ? args.records : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["zoneName"] = args ? args.zoneName : undefined;
        }
        super("azure:dns/srvRecord:SrvRecord", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SrvRecord resources.
 */
export interface SrvRecordState {
    /**
     * The name of the DNS SRV Record.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of values that make up the SRV record. Each `record` block supports fields documented below.
     */
    readonly records?: pulumi.Input<pulumi.Input<{ port: pulumi.Input<number>, priority: pulumi.Input<number>, target: pulumi.Input<string>, weight: pulumi.Input<number> }>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    readonly zoneName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SrvRecord resource.
 */
export interface SrvRecordArgs {
    /**
     * The name of the DNS SRV Record.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of values that make up the SRV record. Each `record` block supports fields documented below.
     */
    readonly records: pulumi.Input<pulumi.Input<{ port: pulumi.Input<number>, priority: pulumi.Input<number>, target: pulumi.Input<string>, weight: pulumi.Input<number> }>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    readonly ttl: pulumi.Input<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    readonly zoneName: pulumi.Input<string>;
}
